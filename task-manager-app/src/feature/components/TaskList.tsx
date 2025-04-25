import React from 'react';
import { useTask } from '../context/taskProvider';
import TaskItem from './TaskItem';
import ModalTask from '../Modal/ModalTask';
import BaseButton from '../../components/common/button';
import BaseSelect from '../../components/common/select';

const TaskList: React.FC = () => {
    const { state } = useTask();
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("All Tasks");

    const handleSelectChange = (newValue: string) => {
        setSelectedValue(newValue);
    };

    const taskStatusOptions = [
        "All Tasks",
        "Completed Tasks",
        "Pending Tasks",
    ];

    const filteredTasks = state.tasks.filter((task) => {
        if (selectedValue === "All Tasks") return true;
        if (selectedValue === "Completed Tasks") return task.completed;
        return !task.completed;
    });

    return (
        <div className="p-6">
            <div className="bg-gray-800 border border-gray-700 rounded-sm shadow-xl w-full mx-auto"
                style={{
                    height: '750px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="p-4 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-100">
                            Your Tasks: <span className="text-gray-400">{filteredTasks.length} items</span>
                        </h2>

                        <div className="flex items-center gap-4">
                            <BaseSelect
                                options={taskStatusOptions}
                                value={selectedValue}
                                onChange={handleSelectChange}
                                label="Task Status"
                            />
                            <BaseButton
                                onClick={() => setOpenModal(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                            >
                                Create Task
                            </BaseButton>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredTasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}

                        {filteredTasks.length === 0 && (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-400 text-lg">
                                    No tasks found. Start by creating one!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ModalTask open={openModal} onClose={() => setOpenModal(false)} isEdit={false} />
        </div>
    );
};

export default TaskList;