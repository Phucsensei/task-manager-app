import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from '../../feature/context/ThemeContext';


interface CustomSelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    id?: string;
    width?: string | number | { [key: string]: string | number };
    height?: string | number | { [key: string]: string | number };
    sx?: SxProps<Theme>;
}

const BaseSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    label,
    id = "custom-select",
    width = { xs: '100%', md: 200 },
    height = { xs: 40, md: 45 },
    sx
}) => {
    const { darkMode } = useTheme(); // Access darkMode from context

    const baseStyles: SxProps<Theme> = {
        '& .MuiInputLabel-root': {
            color: darkMode ? '#9CA3AF' : '#6B7280',  // Dark mode label color
            '&.Mui-focused': {
                color: '#60A5FA',
            },
        },
        '& .MuiOutlinedInput-root': {
            color: darkMode ? '#F3F4F6' : '#1F2937',  // Adjust text color based on dark mode
            height: height,
            '& fieldset': {
                borderColor: darkMode ? '#4B5563' : '#D1D5DB',  // Border color in dark mode
                borderRadius: '8px',
            },
            '&:hover fieldset': {
                borderColor: darkMode ? '#6B7280' : '#4B5563',  // Hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: '#60A5FA',
            },
        },
        '& .MuiSvgIcon-root': {
            color: darkMode ? '#9CA3AF' : '#1F2937',  // Icon color in dark mode
        },
        ...sx,
    };

    return (
        <FormControl
            fullWidth
            sx={{
                width: width,
                ...baseStyles
            }}
        >
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',  // Menu background color
                            color: darkMode ? '#F3F4F6' : '#1F2937',  // Text color in menu
                            '& .MuiMenuItem-root': {
                                '&:hover': {
                                    backgroundColor: darkMode ? '#374151' : '#F3F4F6',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#3B82F6',
                                    '&:hover': {
                                        backgroundColor: '#2563EB',
                                    },
                                },
                            },
                        },
                    },
                }}
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
