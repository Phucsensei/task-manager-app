// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { FiArchive, FiCalendar, FiLogOut, FiStar, FiTag, FiUsers } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import { useTheme } from '../../feature/context/ThemeContext';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const { darkMode } = useTheme();

    const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';
    const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
    const iconColor = {
        blue: darkMode ? 'text-blue-400' : 'text-blue-600',
        amber: darkMode ? 'text-amber-400' : 'text-amber-600',
        red: darkMode ? 'text-red-400' : 'text-red-600',
        purple: darkMode ? 'text-purple-400' : 'text-purple-600',
        emerald: darkMode ? 'text-emerald-400' : 'text-emerald-600',
        gray: darkMode ? 'text-gray-400' : 'text-gray-600',
    };

    const avatarBorderColor = darkMode ? 'border-gray-600' : 'border-gray-300';
    const avatarStatusBorderColor = darkMode ? 'border-gray-800' : 'border-white';

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen backdrop-blur-lg shadow-xl transition-transform duration-300 ease-in-out w-72 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static border-r ${borderColor} ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}`}
        >
            <div className="flex flex-col h-full pt-5 pb-4">
                <div className="px-4 mb-6">
                    <div className="flex items-center gap-3 group">
                        <div className={`relative w-10 h-10 rounded-full overflow-hidden border-2 shadow-sm cursor-pointer hover:scale-105 transition-transform ${avatarBorderColor}`}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/025/277/267/non_2x/happy-indian-man-semi-flat-character-head-editable-cartoon-avatar-icon-man-with-beard-and-curly-hair-face-emotion-colorful-spot-illustration-for-web-graphic-design-animation-vector.jpg"
                                alt="User avatar"
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute bottom-[2px] right-[5px] w-2.5 h-2.5 bg-green-500 rounded-full border-2 ${avatarStatusBorderColor}`}></div>
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <h2 className={`text-sm font-semibold ${textColor} truncate`}>
                                Trần Chí Phúc
                            </h2>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                                phuctc6776@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`border-t ${borderColor} mb-4`}></div>

                <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
                    <MenuSection title="QUICK ACCESS" darkMode={darkMode}>
                        <MenuItem
                            icon={<AiFillProject className={iconColor.blue} />}
                            label="My Tasks"
                            darkMode={darkMode}
                        />
                        <MenuItem
                            icon={<FiStar className={iconColor.amber} />}
                            label="Important"
                            darkMode={darkMode}
                        />
                        <MenuItem
                            icon={<FiCalendar className={iconColor.red} />}
                            label="Upcoming"
                            darkMode={darkMode}
                        />
                    </MenuSection>

                    <MenuSection title="ORGANIZATION" darkMode={darkMode}>
                        <MenuItem
                            icon={<FiUsers className={iconColor.purple} />}
                            label="Team Projects"
                            darkMode={darkMode}
                        />
                        <MenuItem
                            icon={<FiTag className={iconColor.emerald} />}
                            label="Tags"
                            darkMode={darkMode}
                        />
                    </MenuSection>

                    <MenuSection title="TASK VIEWS" darkMode={darkMode}>
                        <MenuItem
                            icon={<FiArchive className={iconColor.gray} />}
                            label="Archive"
                            darkMode={darkMode}
                        />
                    </MenuSection>

                    <MenuSection title="SYSTEM" darkMode={darkMode}>
                        <MenuItem
                            icon={<FiLogOut className={iconColor.red} />}
                            label="Logout"
                            danger
                            darkMode={darkMode}
                        />
                    </MenuSection>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;