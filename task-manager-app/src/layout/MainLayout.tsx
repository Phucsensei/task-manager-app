import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import backgroundImage from '../assets/background.jpg';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = (): void => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Sidebar isOpen={isSidebarOpen} />

            <div className="relative flex flex-col flex-1 min-h-screen w-full transition-all duration-300">
                <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                <main className="mt-12 p-6 overflow-y-auto min-h-[calc(100vh-4rem)]">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;