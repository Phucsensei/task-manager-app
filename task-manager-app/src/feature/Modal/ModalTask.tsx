import React from 'react';
import { Close } from '@mui/icons-material';
import { Modal, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import BaseInput from '../../components/common/input';
import BaseButton from '../../components/common/button';

interface ModalTaskProps {
    open: boolean;
    onClose: () => void;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    description: Yup.string().optional(),
});

const ModalTask: React.FC<ModalTaskProps> = ({ open, onClose }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

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
                    width: { xs: '90%', sm: '500px' },
                    maxWidth: 'md',
                }}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors">
                    <Close className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a Task</h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <BaseInput
                        control={control}
                        name="title"
                        label="Title"
                        placeholder="Enter the task title"
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />

                    <BaseInput
                        control={control}
                        name="date"
                        label="Select Date"
                        type="date"
                        error={!!errors.date}
                        helperText={errors.date?.message}
                    />

                    <BaseInput
                        control={control}
                        name="time"
                        label="Select Time"
                        type="time"
                        error={!!errors.time}
                        helperText={errors.time?.message}
                    />

                    <BaseInput
                        control={control}
                        name="description"
                        label="Description"
                        placeholder="Optional, add a description"
                        multiline
                        rows={4}
                    />

                    <BaseButton
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.01]"
                    >
                        Add Task
                    </BaseButton>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalTask;