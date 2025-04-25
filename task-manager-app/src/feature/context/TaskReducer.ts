import { Task, TaskState, TaskAction } from '../../types/type';

// Reducer logic remains the same
const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    let updatedTasks: Task[] = [];

    switch(action.type) {
        case 'SET_TASKS':
            return { tasks: action.payload };
        case 'ADD_TASK':
            updatedTasks = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        case 'DELETE_TASK':
            updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        case 'TOGGLE_TASK':
            updatedTasks = state.tasks.map(task =>
                task.id === action.payload.id
                    ? { ...task, completed: action.payload.completed }
                    : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        case 'UPDATE_TASK':
            updatedTasks = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        default:
            return state;
    }
};

export default taskReducer;
