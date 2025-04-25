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
    const { darkMode, toggleDarkMode } = useTheme();  // Access darkMode state and toggleDarkMode function from context

    return (
        <header className={`top-0 left-0 w-full ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md shadow-xl z-50 px-4 sm:px-6 py-3.5 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto gap-3 md:gap-6">
                {/* Left Section */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${darkMode ? 'hover:bg-gray-700/40 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
                        >
                            {isSidebarOpen ? <FiChevronLeft className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>

                        <div className="flex items-center gap-2">
                            <IoGridOutline className={`w-7 h-7 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                            <span className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'} tracking-tight`}>
                                TodoApp
                            </span>
                        </div>
                    </div>

                    <button
                        className={`md:hidden px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-sm transition-colors ${darkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                        onClick={() => setOpenModal(true)}
                    >
                        Create Task
                    </button>
                </div>

                {/* Center Navigation */}
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

                {/* Right Section */}
                <div className="flex items-center justify-end w-full md:w-auto gap-4">
                    {/* Search Input */}
                    <div className="flex-1 max-w-full md:max-w-xl">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <IoSearch className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className={`w-full pl-10 pr-4 py-2 rounded-lg backdrop-blur-sm border outline-none transition-all ${darkMode ? 'bg-gray-700/30 border-gray-600 text-gray-100 placeholder:text-gray-400' : 'bg-white/30 border-gray-300 text-gray-800 placeholder:text-gray-500'}`}
                            />
                        </div>
                    </div>

                    {/* Icons and Profile */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}  // Use the toggleDarkMode function from context
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

                        <div className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-sm transition-colors cursor-pointer border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/025/277/267/non_2x/happy-indian-man-semi-flat-character-head-editable-cartoon-avatar-icon-man-with-beard-and-curly-hair-face-emotion-colorful-spot-illustration-for-web-graphic-design-animation-vector.jpg"
                                alt="User avatar"
                                className="w-full h-full object-cover"
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
