import React, { createContext, useReducer, ReactNode, useContext, useEffect } from 'react';
import { Task } from '../../types/Type';

// Kiểu dữ liệu Task

// Kiểu State và Action
export interface TaskState {
    tasks: Task[];
}

type TaskAction =
    | { type: 'SET_TASKS', payload: Task[] }
    | { type: 'ADD_TASK', payload: Task }
    | { type: 'DELETE_TASK', payload: number }
    | { type: 'TOGGLE_TASK', payload: { id: number, completed: boolean } }
    | {
        type: 'UPDATE_TASK'
        payload: {
            id: number
            title?: string
            description?: string
            deadline?: string
            isImportant?: boolean
            completed?: boolean
        }
    };

// Reducer
const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    let updatedTasks: Task[] = [];

    if (action.type === 'SET_TASKS') {
        return { tasks: action.payload };
    }

    if (action.type === 'ADD_TASK') {
        updatedTasks = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
    }

    if (action.type === 'DELETE_TASK') {
        updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
    }

    if (action.type === 'TOGGLE_TASK') {
        updatedTasks = state.tasks.map((task) =>
            task.id === action.payload.id
                ? { ...task, completed: action.payload.completed }
                : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
    }

    if (action.type === 'UPDATE_TASK') {
        updatedTasks = state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, ...action.payload } : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
    }

    return state;
};

// Create context
interface TaskContextType {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Custom hook to use TaskContext
export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};

// TaskProvider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

    useEffect(() => {
        try {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks !== null) {
                const parsedTasks = JSON.parse(storedTasks);
                if (Array.isArray(parsedTasks)) {
                    dispatch({ type: 'SET_TASKS', payload: parsedTasks });
                }
            }
        } catch (error) {
            console.error('❌ Error loading tasks from localStorage:', error);
            localStorage.removeItem('tasks');
        }
    }, []);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
