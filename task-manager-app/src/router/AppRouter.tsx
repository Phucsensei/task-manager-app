import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import TaskList from '../feature/components/TaskList';
const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/" element={<MainLayout />}>
                <Route path="tasks" element={<TaskList />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>

    );
};

export default AppRouter;
