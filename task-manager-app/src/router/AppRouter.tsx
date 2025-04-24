import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import TaskItem from '../feature/components/TaskItem';
import { TaskProvider } from '../feature/context/TaskContext';


const AppRouter: React.FC = () => {
    return (
        <TaskProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/tasks" />} />
                <Route path="/" element={<MainLayout />}>
                    <Route path="tasks" element={<TaskItem />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </TaskProvider>
    );
};

export default AppRouter;
