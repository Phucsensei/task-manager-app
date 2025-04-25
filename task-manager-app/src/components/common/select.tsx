import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { SxProps, Theme } from '@mui/material/styles';

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
    const baseStyles: SxProps<Theme> = {
        '& .MuiInputLabel-root': {
            color: '#9CA3AF',
            '&.Mui-focused': {
                color: '#60A5FA'
            }
        },
        '& .MuiOutlinedInput-root': {
            color: '#F3F4F6',
            height: height,
            '& fieldset': {
                borderColor: '#4B5563',
                borderRadius: '8px'
            },
            '&:hover fieldset': {
                borderColor: '#6B7280'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#60A5FA'
            }
        },
        '& .MuiSvgIcon-root': {
            color: '#9CA3AF'
        },
        ...sx
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
                            backgroundColor: '#1F2937',
                            color: '#F3F4F6',
                            '& .MuiMenuItem-root': {
                                '&:hover': {
                                    backgroundColor: '#374151'
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#3B82F6',
                                    '&:hover': {
                                        backgroundColor: '#2563EB'
                                    }
                                }
                            }
                        }
                    }
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