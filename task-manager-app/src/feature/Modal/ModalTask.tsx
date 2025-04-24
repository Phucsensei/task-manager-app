import React from 'react';
import { Close } from '@mui/icons-material';
import { Modal, Box } from '@mui/material';
import BaseInput from '../../components/common/input';

interface ModalTaskProps {
    open: boolean;
    onClose: () => void;
}

const ModalTask: React.FC<ModalTaskProps> = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            aria-labelledby="add-task-modal"
            aria-describedby="form-to-add-task"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    borderRadius: '8px',
                    boxShadow: 24,
                    p: 4,
                    width: {
                        xs: '90%',
                        sm: '500px',
                    },
                    maxWidth: 'md',
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <Close className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a Task</h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <BaseInput
                        label="Title"
                        placeholder="e.g., study for the test"
                    />

                    <BaseInput
                        label="Date"
                        type="date"
                    />

                    <BaseInput
                        label="Time"
                        type="time"
                    />

                    <BaseInput
                        label="Description"
                        placeholder="Optional"
                        multiline
                        rows={4}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.01]"
                    >
                        Add Task
                    </button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalTask;