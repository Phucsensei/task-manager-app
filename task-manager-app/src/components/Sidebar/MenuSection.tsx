import React from 'react';

interface MenuSectionProps {
    title: string;
    children: React.ReactNode;
    darkMode: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, children, darkMode }) => (
    <div className="mb-6">
        <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider px-4 mb-2`}>
            {title}
        </h3>
        <div className="space-y-1">{children}</div>
    </div>
);

export default MenuSection;