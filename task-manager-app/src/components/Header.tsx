import React from 'react';
import {
    IoSearch,
    IoNotificationsOutline,
    IoHelpCircleOutline,
    IoGridOutline
} from 'react-icons/io5';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import BaseButton from './common/button';
import BaseSelect from './common/select';
import ModalTask from '../feature/Modal/ModalTask';

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
    const [selectedValue, setSelectedValue] = React.useState<string>("All Tasks");
    const [openModal, setOpenModal] = React.useState(false);

    const handleSelectChange = (newValue: string) => {
        setSelectedValue(newValue);
    };

    const taskStatusOptions = [
        "All Tasks",
        "Completed Tasks",
        "Pending Tasks",
    ];

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <header className="top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-xl z-50 px-4 sm:px-6 py-3.5 border-b border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto gap-3 md:gap-6">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
                        >
                            {isSidebarOpen
                                ? <FiChevronLeft className="w-6 h-6 text-gray-800" />
                                : <FiMenu className="w-6 h-6 text-gray-800" />}
                        </button>

                        <div className="flex items-center gap-2">
                            <IoGridOutline className="w-7 h-7 text-gray-800" />
                            <span className="text-xl font-semibold text-gray-800 tracking-tight">TodoApp</span>
                        </div>
                    </div>

                    <button
                        className="md:hidden bg-white/90 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-white transition-colors whitespace-nowrap shadow-sm"
                        onClick={handleOpenModal}
                    >
                        Create Task
                    </button>
                </div>

                <nav className="hidden lg:flex items-center gap-5 ml-2">
                    <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/20">
                        Workspaces
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/20">
                        Recent
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/20">
                        Starred
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/20">
                        Templates
                    </a>
                </nav>

                <div className="flex items-center justify-end w-full md:w-auto gap-4">
                    <div className="flex-1 max-w-full md:max-w-xl">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <IoSearch className="w-5 h-5 text-gray-700" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-gray-800 placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <BaseButton onClick={handleOpenModal}>
                            Create Task
                        </BaseButton>

                        <BaseSelect
                            options={taskStatusOptions}
                            value={selectedValue}
                            onChange={handleSelectChange}
                            label="Task Status"
                        />

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <IoNotificationsOutline className="w-6 h-6 text-gray-800 hover:text-gray-900 cursor-pointer transition-colors" />
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-400 rounded-full border-2 border-white" />
                            </div>

                            <IoHelpCircleOutline className="w-6 h-6 text-gray-800 hover:text-gray-900 cursor-pointer transition-colors" />

                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-sm hover:bg-white/20 transition-colors cursor-pointer border border-white/30">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/025/277/267/non_2x/happy-indian-man-semi-flat-character-head-editable-cartoon-avatar-icon-man-with-beard-and-curly-hair-face-emotion-colorful-spot-illustration-for-web-graphic-design-animation-vector.jpg"
                                    alt="User avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalTask open={openModal} onClose={handleCloseModal} isEdit={false} />
        </header>
    );
};

export default Header;