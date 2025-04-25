import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import backgroundImage from '../assets/background.jpg';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = (): void => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen overflow-hidden relative">
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <Sidebar isOpen={isSidebarOpen} />
            <div className="relative flex flex-col flex-1 min-h-screen w-full transition-all duration-300">
                <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="flex-1 p-3 overflow-y-auto">
                    <div className="w-full h-full text-gray-100">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;