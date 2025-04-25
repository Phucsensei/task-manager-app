import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { useTheme } from '../../feature/context/ThemeContext';


interface InputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    multiline?: boolean;
    rows?: number;
    helperText?: string;
    control: any;
    error?: boolean;
}

const BaseInput: React.FC<InputProps> = ({ label, control, name, error, helperText, ...props }) => {
    const { darkMode } = useTheme();  // Access darkMode from context

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    variant="outlined"
                    fullWidth
                    error={error}
                    helperText={error ? helperText : ''}
                    InputLabelProps={{
                        shrink: true,
                        style: {
                            color: darkMode ? '#B0B0B0' : '#4A4A4A',  // Adjust label color based on dark mode
                            fontWeight: 500
                        }
                    }}
                    InputProps={{
                        style: {
                            color: darkMode ? '#FFFFFF' : '#000000',  // Text color based on dark mode
                            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',  // Background color based on dark mode
                            borderRadius: '8px',
                        }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: darkMode ? '#404040' : '#E0E0E0',  // Border color based on dark mode
                            },
                            '&:hover fieldset': {
                                borderColor: darkMode ? '#606060!important' : '#B0B0B0!important',  // Hover border color
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#2563EB!important',  // Focus border color
                            }
                        },
                        '& .MuiFormHelperText-root': {
                            color: error ? '#F87171' : (darkMode ? '#A0A0A0' : '#808080')  // Adjust error message color based on dark mode
                        }
                    }}
                    {...props}
                />
            )}
        />
    );
};

export default BaseInput;
