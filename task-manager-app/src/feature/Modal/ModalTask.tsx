import React, { useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { Modal, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import BaseInput from '../../components/common/input';
import BaseButton from '../../components/common/button';
import { Task } from '../../types/type';
import { useTask } from '../context/taskProvider';

interface ModalTaskProps {
    open: boolean;
    onClose: () => void;
    isEdit: boolean;
    task?: Task;
}

interface FormData {
    title: string;
    date: string;
    time: string;
    description?: string;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    description: Yup.string().optional(),
});

const ModalTask: React.FC<ModalTaskProps> = ({ open, onClose, isEdit, task }) => {
    const { dispatch } = useTask();
    const { control, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        if (!open) reset();
    }, [open, reset]);

    useEffect(() => {
        if (isEdit && task) {
            const formattedDate = task.date
                ? new Date(task.date).toISOString().split('T')[0]
                : '';

            setValue('title', task.title);
            setValue('date', formattedDate);
            setValue('time', task.time);
            setValue('description', task.description);
        }
    }, [isEdit, task, setValue]);

    const onSubmit = (data: FormData) => {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        const description = data.description || '';

        if (isEdit && task) {
            const updatedTask = { ...task, ...data, description };
            localStorage.setItem('tasks', JSON.stringify(
                tasks.map((t: Task) => t.id === task.id ? updatedTask : t)
            ));
            dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
        } else {
            const newTask = {
                id: Date.now(),
                ...data,
                completed: false,
                createdAt: new Date().toISOString(),
                description,
            };
            localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
            dispatch({ type: 'ADD_TASK', payload: newTask });
        }

        onClose();
    };


    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(4px)'
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: '#2D2D2D',
                    border: '1px solid #404040',
                    borderRadius: '5px',
                    boxShadow: 24,
                    p: 4,
                    width: { xs: '90%', sm: '500px' },
                    maxWidth: 'md'
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
                >
                    <Close className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-gray-100 mb-6">
                    {isEdit ? 'Edit Task' : 'Add Task'}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <BaseInput
                        control={control}
                        name="title"
                        label="Title"
                        placeholder="Enter task title"
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BaseInput
                            control={control}
                            name="date"
                            label="Date"
                            type="date"
                            error={!!errors.date}
                            helperText={errors.date?.message}
                        />

                        <BaseInput
                            control={control}
                            name="time"
                            label="Time"
                            type="time"
                            error={!!errors.time}
                            helperText={errors.time?.message}
                        />
                    </div>

                    <BaseInput
                        control={control}
                        name="description"
                        label="Description"
                        placeholder="Add description (optional)"
                        multiline
                        rows={4}
                    />

                    <BaseButton
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200"
                    >
                        {isEdit ? 'Update Task' : 'Create Task'}
                    </BaseButton>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalTask;