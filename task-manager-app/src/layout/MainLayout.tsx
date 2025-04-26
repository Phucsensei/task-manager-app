import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../feature/context/ThemeContext';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const { darkMode } = useTheme();

    const toggleSidebar = (): void => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div
            className={`flex h-screen overflow-hidden relative ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
            <Sidebar isOpen={isSidebarOpen} />
            <div
                className={`relative flex flex-col flex-1 min-h-screen w-full transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
                <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main>
                    <div className={`w-full h-full text-${darkMode ? 'gray-100' : 'gray-800'}`}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;