import React from 'react';
import { FiArchive, FiCalendar, FiLogOut, FiStar, FiTag, FiUsers } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen bg-white/70 backdrop-blur-lg shadow-xl transition-transform duration-300 ease-in-out w-72
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static border-r border-white/20`}
        >
            <div className="flex flex-col h-full pt-20 pb-8">
                <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
                    {/* Quick Access */}
                    <MenuSection title="QUICK ACCESS">
                        <MenuItem
                            icon={<AiFillProject className="text-blue-600" />}
                            label="My Tasks"
                        />
                        <MenuItem
                            icon={<FiStar className="text-amber-500" />}
                            label="Important"
                        />
                        <MenuItem
                            icon={<FiCalendar className="text-red-500" />}
                            label="Upcoming"
                        />
                    </MenuSection>

                    {/* Task Organization */}
                    <MenuSection title="ORGANIZATION">
                        <MenuItem
                            icon={<FiUsers className="text-purple-600" />}
                            label="Team Projects"
                        />
                        <MenuItem
                            icon={<FiTag className="text-emerald-600" />}
                            label="Tags"
                        />
                    </MenuSection>

                    {/* Task Views */}
                    <MenuSection title="TASK VIEWS">
                        <MenuItem
                            icon={<FiArchive className="text-gray-600" />}
                            label="Archive"
                        />
                    </MenuSection>

                    {/* System */}
                    <MenuSection title="SYSTEM">
                        <MenuItem
                            icon={<FiLogOut className="text-red-600" />}
                            label="Logout"
                            danger
                        />
                    </MenuSection>

                    {/* Workspace Status */}
                    <div className="mt-auto px-4 pt-4 border-t border-white/10">
                        <div className="text-xs text-gray-600 space-y-1">
                            <div className="flex justify-between">
                                <span>Storage</span>
                                <span>24.5G/50G</span>
                            </div>
                            <div className="h-1 bg-gray-200 rounded-full">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                    style={{ width: '65%' }}
                                />
                            </div>
                            <div className="text-[0.7rem] text-gray-500">
                                Last sync: 2h ago
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

interface MenuSectionProps {
    title: string;
    children: React.ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-4 mb-2">
            {title}
        </h3>
        <div className="space-y-1">{children}</div>
    </div>
);

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    danger?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, danger = false }) => {
    const colorClass = danger
        ? 'text-red-600 hover:bg-red-100/40'
        : 'text-gray-800 hover:bg-white/20';

    return (
        <div
            className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${colorClass}`}
        >
            <div className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className="font-medium">{label}</span>
            </div>
        </div>
    );
};

export default Sidebar;