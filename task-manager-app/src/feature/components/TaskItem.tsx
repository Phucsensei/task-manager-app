import React, { useState } from 'react';
import { BsCalendarEvent, BsPencilSquare, BsClock } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../context/TaskContext';
import ConfirmDelete from '../Modal/ModalConfirmDelete';
import ModalTask from '../Modal/ModalTask';

const TaskItem: React.FC = () => {
    const { task } = useTask();
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [openModalTask, setOpenModalTask] = useState(false);
    const [isEdit, setIsEdit] = useState(false);  // Track if it is Edit or Add mode
    const [currentTask, setCurrentTask] = useState<any>(null);  // Store the task data for Edit

    const handleDeleteClick = () => {
        setOpenConfirmDelete(true);
    };

    const handleCloseConfirmDelete = () => {
        setOpenConfirmDelete(false);
    };

    const handleConfirmDelete = () => {
        console.log('Task deleted');
        setOpenConfirmDelete(false);
    };

    // Open Modal in Edit mode
    const handleEditClick = () => {
        setIsEdit(true);
        setCurrentTask(task);  // Set the task data to edit
        setOpenModalTask(true);
    };

    const handleCloseModalTask = () => {
        setOpenModalTask(false);
        setIsEdit(false);  // Reset edit mode when closing modal
    };

    return (
        <div className={`bg-white/70 backdrop-blur-lg text-gray-800 p-5 mt-4 rounded-xl w-full max-w-[400px]
            shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col justify-between
            min-h-[220px] relative group`} style={{ opacity: task.completed ? 0.5 : 1 }}>

            {/* Task Title and Edit Icon */}
            <div className="flex justify-between items-center flex-wrap">
                <span className="text-lg font-semibold text-gray-800 flex-1 overflow-hidden whitespace-nowrap truncate pr-2">
                    {task.text}
                </span>
                <div className="cursor-pointer text-gray-500 hover:text-blue-600
                    transition-colors duration-200 transform hover:scale-110" onClick={handleEditClick}>
                    <BsPencilSquare title="Edit task" size="1.1em" />
                </div>
            </div>

            {/* Task Description */}
            <div className="text-sm text-gray-600 mt-2 mb-3 flex-grow overflow-hidden truncate whitespace-nowrap"
                title={task.description}>
                {task.description}
            </div>

            {/* Task Date and Time */}
            <div className="flex justify-between items-center text-sm text-gray-600 gap-2">
                <div className="flex items-center gap-1.5">
                    <BsCalendarEvent className="text-blue-600" />
                    <span className="ml-1">{task.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <BsClock className="text-purple-600" />
                    <span className="ml-1">{task.time}</span>
                </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 my-3" />

            {/* Task Status and Action Buttons */}
            <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide
                    ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {task.completed ? 'Completed' : 'Uncompleted'}
                </span>

                <div className="flex items-center gap-3">
                    <div className={`relative inline-flex items-center h-6 rounded-full w-11
                        transition-colors duration-200 cursor-pointer ${task.completed ? 'bg-green-400' : 'bg-gray-300'}`}>
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform
                            transition-transform duration-200 ${task.completed ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </div>

                    {/* Delete Button */}
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="text-gray-500 hover:text-red-600
                            transition-colors duration-200 hover:scale-110"
                        title="Delete task"
                        onClick={handleDeleteClick}
                    />
                </div>
            </div>

            {/* Confirm Delete Modal */}
            <ConfirmDelete
                open={openConfirmDelete}
                onClose={handleCloseConfirmDelete}
                onConfirm={handleConfirmDelete}
            />

            {/* Modal to Add/Edit Task */}
            <ModalTask
                open={openModalTask}
                onClose={handleCloseModalTask}
                isEdit={isEdit}
                task={currentTask}
            />
        </div>
    );
};

export default TaskItem;
