import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

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

const BaseInput: React.FC<InputProps> = ({ label, control, name, error, helperText, ...props }) => (
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
                        color: '#B0B0B0',
                        fontWeight: 500
                    }
                }}
                InputProps={{
                    style: {
                        color: '#FFFFFF',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                    }
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#404040',
                        },
                        '&:hover fieldset': {
                            borderColor: '#606060!important',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#2563EB!important',
                        }
                    },
                    '& .MuiFormHelperText-root': {
                        color: error ? '#F87171' : '#808080'
                    }
                }}
                {...props}
            />
        )}
    />
);

export default BaseInput;