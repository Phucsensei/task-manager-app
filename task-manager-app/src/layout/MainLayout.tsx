import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import backgroundImage from '../assets/background.jpg';
// import { Outlet } from 'react-router-dom';

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
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="relative flex flex-col flex-1 min-h-screen w-full transition-all duration-300">
                {/* Header */}
                <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                {/* Main content - Đã comment nhưng giữ lại để bạn có thể bỏ comment khi cần */}
                {/* <main className="mt-16 p-6 overflow-y-auto min-h-[calc(100vh-4rem)]">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/90 shadow-sm border border-gray-200/50 rounded-lg backdrop-blur-sm">
                            <Outlet />
                        </div>
                    </div>
                </main> */}
            </div>
        </div>
    );
};

export default MainLayout;