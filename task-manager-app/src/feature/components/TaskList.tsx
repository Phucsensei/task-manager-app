import React from 'react';
import { useTask } from '../context/TaskContext';
import TaskItem from './TaskItem';  // Component hiển thị từng task

const TaskList: React.FC = () => {
    const { state } = useTask();  // Lấy danh sách tasks từ Context

    if (!state.tasks || state.tasks.length === 0) {
        return <div>No tasks available</div>;
    }

    return (
        <div>
            {state.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
