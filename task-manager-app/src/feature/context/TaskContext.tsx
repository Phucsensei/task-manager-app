import React, { createContext, useContext, ReactNode } from 'react';

interface Task {
    text: string;
    description: string;
    date: string;
    time: string;
    completed: boolean;
}

interface TaskContextType {
    task: Task;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [task, setTask] = React.useState<Task>({
        text: 'Learn React',
        description: 'Study React and related technologies.',
        date: '2025-04-30',
        time: '10:00 AM',
        completed: false,
    });

    return (
        <TaskContext.Provider value={{ task, setTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
};
