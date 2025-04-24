import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface CustomSelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    id?: string;
    width?: string | number;
    height?: string | number;
}

const BaseSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    label,
    id = "custom-select",
    width = '200px',
    height = '40px',
}) => {
    return (
        <FormControl fullWidth style={{ width: width, height: height }}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
                style={{ height: '100%' }} // Ensure Select fills FormControl height
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default BaseSelect;