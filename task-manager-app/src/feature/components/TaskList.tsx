import React from 'react';
import { useTask } from '../context/TaskProvider';
import TaskItem from './TaskItem';
import ModalTask from '../Modal/ModalTask';
import BaseButton from '../../components/common/button';
import BaseSelect from '../../components/common/select';
import { FiPlusCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const TaskList: React.FC = () => {
    const { state } = useTask();
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string>("All Tasks");
    const { darkMode } = useTheme();

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
        <div>
            <div
                className={`w-full mx-auto transition-all duration-300 ${darkMode
                    ? 'bg-gray-900/95 border-gray-700'
                    : 'bg-white/80 border-gray-200'
                    }`}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                                Task Management
                            </h2>
                            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {filteredTasks.length} tasks found
                            </p>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center gap-4 w-full md:w-auto">
                            <BaseSelect
                                options={taskStatusOptions}
                                value={selectedValue}
                                onChange={handleSelectChange}
                                label="Filter Tasks"
                            />
                            <BaseButton
                                onClick={() => setOpenModal(true)}
                                className="gap-2"
                            >
                                <FiPlusCircle className="text-lg" />
                                Create New Task
                            </BaseButton>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredTasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}

                        {filteredTasks.length === 0 && (
                            <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
                                <div className={`mb-4 p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                    <FiPlusCircle className={`text-4xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                </div>
                                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                    No Tasks Found
                                </h3>
                                <p className={`text-center max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Start organizing your work by creating your first task. Click the "Create New Task" button to get started.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ModalTask
                open={openModal}
                onClose={() => setOpenModal(false)}
                isEdit={false}
            />
        </div>
    );
};

export default TaskList;