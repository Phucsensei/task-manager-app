import React from 'react';
import { IoSearch, IoNotificationsOutline, IoHelpCircleOutline, IoGridOutline, IoMoon, IoSunny } from 'react-icons/io5';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import ModalTask from '../feature/Modal/ModalTask';
import { useTheme } from '../feature/context/ThemeContext';

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header className={`top-0 left-0 w-full backdrop-blur-md z-50 px-4 sm:px-6 py-3.5 border-b ${darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto gap-3 md:gap-6">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${darkMode ? 'hover:bg-gray-700/40 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
                        >
                            {isSidebarOpen ? <FiChevronLeft className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>

                        <div className="flex items-center gap-2">
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-trello-logo-icon-download-in-svg-png-gif-file-formats--tasks-bloomies-webdesign-tools-pack-logos-icons-682087.png?f=webp"
                                alt="Logo"
                                className="w-10 h-10"
                            />
                            <span className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'} tracking-tight`}>
                                TodoApp
                            </span>
                        </div>

                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-5 ml-2">
                    {['Workspaces', 'Recent', 'Starred', 'Templates'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700/40' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center justify-end w-full md:w-auto gap-4">
                    <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <IoSearch className="h-5 w-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className={`w-full pl-10 pr-4 py-2 rounded-xl border transition-all ${darkMode
                                    ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500'
                                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-400'
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700/40' : 'hover:bg-gray-100'}`}
                        >
                            {darkMode ? (
                                <IoSunny className="w-6 h-6 text-yellow-400" />
                            ) : (
                                <IoMoon className="w-6 h-6 text-gray-600" />
                            )}
                        </button>

                        <div className="relative">
                            <IoNotificationsOutline className={`w-6 h-6 transition-colors ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`} />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-400 rounded-full border-2 border-gray-800" />
                        </div>

                        <IoHelpCircleOutline className={`w-6 h-6 transition-colors ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`} />

                        <div className={`ml-2 p-1 rounded-full border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/025/277/267/non_2x/happy-indian-man-semi-flat-character-head-editable-cartoon-avatar-icon-man-with-beard-and-curly-hair-face-emotion-colorful-spot-illustration-for-web-graphic-design-animation-vector.jpg"
                                alt="User avatar"
                                className="h-8 w-8 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ModalTask open={openModal} onClose={() => setOpenModal(false)} isEdit={false} />
        </header>
    );
};

export default Header;