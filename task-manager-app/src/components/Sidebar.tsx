import React from 'react';
import { FiArchive, FiCalendar, FiLogOut, FiStar, FiTag, FiUsers } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';
import { useTheme } from '../feature/context/ThemeContext';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const { darkMode } = useTheme();  // Access darkMode from context

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen bg-gray-900/90 backdrop-blur-lg shadow-xl transition-transform duration-300 ease-in-out w-72
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static border-r border-gray-700
                ${darkMode ? 'bg-gray-900' : 'bg-white'} `} // Apply dark mode background
        >
            <div className="flex flex-col h-full pt-5 pb-4">
                <div className="px-4 mb-6">
                    <div className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600 shadow-sm cursor-pointer hover:scale-105 transition-transform">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/025/277/267/non_2x/happy-indian-man-semi-flat-character-head-editable-cartoon-avatar-icon-man-with-beard-and-curly-hair-face-emotion-colorful-spot-illustration-for-web-graphic-design-animation-vector.jpg"
                                alt="User avatar"
                                className="w-full h-full"
                            />
                            <div className="absolute bottom-[2px] right-[5px] w-2.5 h-2.5 bg-green-500 rounded-full border border-gray-800"></div>
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <h2 className={`text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'} truncate`}>
                                Trần Chí Phúc
                            </h2>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                                phuctc6776@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-700 mb-4'></div>
                <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
                    <MenuSection title="QUICK ACCESS">
                        <MenuItem
                            icon={<AiFillProject className={darkMode ? 'text-blue-400' : 'text-blue-600'} />}
                            label="My Tasks"
                        />
                        <MenuItem
                            icon={<FiStar className={darkMode ? 'text-amber-400' : 'text-amber-600'} />}
                            label="Important"
                        />
                        <MenuItem
                            icon={<FiCalendar className={darkMode ? 'text-red-400' : 'text-red-600'} />}
                            label="Upcoming"
                        />
                    </MenuSection>

                    <MenuSection title="ORGANIZATION">
                        <MenuItem
                            icon={<FiUsers className={darkMode ? 'text-purple-400' : 'text-purple-600'} />}
                            label="Team Projects"
                        />
                        <MenuItem
                            icon={<FiTag className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />}
                            label="Tags"
                        />
                    </MenuSection>

                    <MenuSection title="TASK VIEWS">
                        <MenuItem
                            icon={<FiArchive className={darkMode ? 'text-gray-400' : 'text-gray-600'} />}
                            label="Archive"
                        />
                    </MenuSection>

                    <MenuSection title="SYSTEM">
                        <MenuItem
                            icon={<FiLogOut className={darkMode ? 'text-red-400' : 'text-red-600'} />}
                            label="Logout"
                            danger
                        />
                    </MenuSection>
                </nav>
            </div>
        </aside>
    );
};

interface MenuSectionProps {
    title: string;
    children: React.ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => {
    const { darkMode } = useTheme();  // Access darkMode from context
    return (
        <div className="mb-6">
            <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider px-4 mb-2`}>
                {title}
            </h3>
            <div className="space-y-1">{children}</div>
        </div>
    );
};

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    danger?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, danger = false }) => {
    const { darkMode } = useTheme();  // Access darkMode from context
    const colorClass = danger
        ? 'text-red-400 hover:bg-red-900/40'
        : `text-${darkMode ? 'gray-100' : 'gray-800'} hover:bg-${darkMode ? 'gray-700/40' : 'gray-100'}`;

    return (
        <div
            className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${colorClass}`}
        >
            <div className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{label}</span>
            </div>
        </div>
    );
};

export default Sidebar;
