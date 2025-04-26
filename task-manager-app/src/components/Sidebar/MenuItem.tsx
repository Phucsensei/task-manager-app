import React from 'react';

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    danger?: boolean;
    darkMode: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, danger = false, darkMode }) => {
    const colorClass = danger
        ? `text-${darkMode ? 'red-400' : 'red-600'} hover:bg-${darkMode ? 'red-900/40' : 'red-100/40'}`
        : `text-${darkMode ? 'gray-100' : 'gray-800'} hover:bg-${darkMode ? 'gray-800' : 'gray-100'}`;

    return (
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${colorClass}`}>
            <div className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className="font-medium">{label}</span>
            </div>
        </div>
    );
};

export default MenuItem;