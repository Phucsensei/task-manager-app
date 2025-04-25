export interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    completed: boolean;
}

export interface TaskState {
    tasks: Task[];
}

export type TaskAction =
    | { type: 'SET_TASKS'; payload: Task[] }
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'DELETE_TASK'; payload: number }
    | { type: 'TOGGLE_TASK'; payload: { id: number; completed: boolean } }
    | {
        type: 'UPDATE_TASK';
        payload: {
            id: number;
            title?: string;
            description?: string;
            deadline?: string;
            isImportant?: boolean;
            completed?: boolean;
        };
    };