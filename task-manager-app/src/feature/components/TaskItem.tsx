import React, { useState } from 'react';
import { BsCalendarEvent, BsPencilSquare, BsClock } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../context/TaskProvider';
import ConfirmDelete from '../Modal/ModalConfirmDelete';
import ModalTask from '../Modal/ModalTask';
import { useTheme } from '../context/ThemeContext';

const TaskItem: React.FC<{ task: any }> = ({ task }) => {
    const { dispatch } = useTask();
    const { darkMode } = useTheme();
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [openModalTask, setOpenModalTask] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentTask, setCurrentTask] = useState<any>(null);

    const handleDeleteClick = () => setOpenConfirmDelete(true);
    const handleCloseConfirmDelete = () => setOpenConfirmDelete(false);
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

    if (!task) return <div>No task data available</div>;

    return (
        <div
            className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
                } p-5 rounded-xl w-full shadow-md hover:shadow-lg transition-all duration-300 border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                } flex flex-col justify-between min-h-[220px] relative group transform hover:-translate-y-1`}
            style={{ opacity: task.completed ? 0.6 : 1 }}
        >
            <div className="flex justify-between items-start gap-2 mb-3">
                <div className="flex-1">
                    <h3 className={`text-lg font-semibold break-words ${task.completed ? 'line-through' : ''
                        } ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {task.title}
                    </h3>
                </div>
                <button
                    className="p-2 hover:bg-gray-700/20 rounded-lg transition-colors duration-200"
                    onClick={handleEditClick}
                >
                    <BsPencilSquare className="text-gray-400 hover:text-blue-400" size="1.1em" />
                </button>
            </div>

            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'
                } mb-4 text-sm line-clamp-3 leading-relaxed`}>
                {task.description}
            </p>

            <div className="space-y-2.5 mb-4">
                <div className="flex items-center gap-2 text-sm">
                    <BsCalendarEvent className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {formattedDate}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <BsClock className={`${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {task.time}
                    </span>
                </div>
            </div>

            <div className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-3`}>
                <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.completed
                        ? 'bg-green-400 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-400 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                        {task.completed ? 'Completed' : 'Pending'}
                    </span>

                    <div className="flex items-center gap-3">
                        <button
                            className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ${task.completed
                                ? 'bg-green-400 dark:bg-green-500'
                                : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            onClick={handleToggleCompletion}
                        >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${task.completed ? 'translate-x-full' : 'translate-x-0'
                                }`} />
                        </button>

                        <button
                            className="p-2 hover:bg-gray-700/20 rounded-lg transition-colors duration-200"
                            onClick={handleDeleteClick}
                        >
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="text-gray-400 hover:text-red-400"
                                title="Delete task"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <ConfirmDelete open={openConfirmDelete} onClose={handleCloseConfirmDelete} onConfirm={handleConfirmDelete} />
            <ModalTask open={openModalTask} onClose={handleCloseModalTask} isEdit={isEdit} task={currentTask} />
        </div>
    );
};

export default TaskItem;