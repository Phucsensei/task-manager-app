import React from 'react';

interface InputProps {
    label: string;
    helperText?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    multiline?: boolean;
    rows?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const BaseInput: React.FC<InputProps> = ({ label, helperText, name, ...props }) => {
    const id = React.useMemo(() => label.toLowerCase().replace(/ /g, '_'), [label]);

    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>

            <input
                id={id}
                name={name || id}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
                {...props}
            />

            {helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
        </div>
    );
};

export default BaseInput;