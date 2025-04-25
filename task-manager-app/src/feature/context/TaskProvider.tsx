import React, { createContext, useReducer, ReactNode, useContext, useEffect } from 'react'; // Import types from a common file
import taskReducer from './TaskReducer';
import { TaskAction, TaskState } from '../../types/type';

interface TaskContextType {
    state: TaskState;
    dispatch: React.Dispatch<TaskAction>;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
