import React, { useState } from 'react';
import { BsCalendarEvent, BsPencilSquare, BsClock } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../context/taskProvider';
import ConfirmDelete from '../Modal/ModalConfirmDelete';
import ModalTask from '../Modal/ModalTask';
import { useTheme } from '../context/ThemeContext';

const TaskItem: React.FC<{ task: any }> = ({ task }) => {
    const { dispatch } = useTask();
    const { darkMode } = useTheme(); // Access darkMode from context
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [openModalTask, setOpenModalTask] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentTask, setCurrentTask] = useState<any>(null);

    const handleDeleteClick = () => {
        setOpenConfirmDelete(true);
    };

    const handleCloseConfirmDelete = () => {
        setOpenConfirmDelete(false);
    };

    const handleConfirmDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
        setOpenConfirmDelete(false);
    };

    const handleEditClick = () => {
        setIsEdit(true);
        setCurrentTask(task);
        setOpenModalTask(true);
    };

    const handleCloseModalTask = () => {
        setOpenModalTask(false);
        setIsEdit(false);
    };

    const handleToggleCompletion = () => {
        dispatch({
            type: 'TOGGLE_TASK',
            payload: { id: task.id, completed: !task.completed },
        });
    };

    const formattedDate = new Date(task.date).toLocaleDateString();

    if (!task) {
        return <div>No task data available</div>;
    }

    return (
        <div
            className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
                } backdrop-blur-lg p-4 md:p-5 mt-4 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 flex flex-col justify-between min-h-[250px] relative group`}
            style={{ opacity: task.completed ? 0.5 : 1 }}
        >
            <div className="flex justify-between items-center gap-2">
                <span
                    className={`text-base md:text-lg font-semibold overflow-hidden whitespace-nowrap truncate pr-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}
                >
                    {task.title}
                </span>
                <div
                    className="cursor-pointer text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                    onClick={handleEditClick}
                >
                    <BsPencilSquare title="Edit task" size="1.1em" />
                </div>
            </div>

            <div
                className={`${darkMode ? 'text-gray-400' : 'text-gray-600'
                    } flex-grow truncate`}
                title={task.description}
            >
                {task.description}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-2">
                <div className="flex items-center gap-1.5 flex-1">
                    <BsCalendarEvent className="text-blue-400" size={16} />
                    <span className="ml-1 text-sm md:text-base font-medium">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-1.5 flex-1 ml-[130px]">
                    <BsClock className="text-purple-400" size={16} />
                    <span className="ml-1 text-sm md:text-base font-medium">{task.time}</span>
                </div>
            </div>

            <div className="w-full h-px bg-gray-700 my-3" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <span
                    className={`px-3 py-1 rounded-md text-xs md:text-sm font-bold tracking-wide ${task.completed
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-yellow-900/30 text-yellow-400'
                        }`}
                >
                    {task.completed ? 'COMPLETED' : 'PENDING'}
                </span>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div
                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 cursor-pointer ${task.completed ? 'bg-green-400' : 'bg-gray-600'
                            }`}
                        onClick={handleToggleCompletion}
                    >
                        <div
                            className={`h-4 w-4 md:h-5 md:w-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${task.completed ? 'translate-x-5' : 'translate-x-0.5'
                                }`}
                        />
                    </div>

                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200 hover:scale-110 ml-auto md:ml-0"
                        title="Delete task"
                        onClick={handleDeleteClick}
                    />
                </div>
            </div>

            <ConfirmDelete open={openConfirmDelete} onClose={handleCloseConfirmDelete} onConfirm={handleConfirmDelete} />

            <ModalTask open={openModalTask} onClose={handleCloseModalTask} isEdit={isEdit} task={currentTask} />
        </div>
    );
};

export default TaskItem;
