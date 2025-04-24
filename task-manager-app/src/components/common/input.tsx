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
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                variant="outlined"
                fullWidth
                error={error}
                helperText={error ? helperText : ''}
                InputLabelProps={{ shrink: true }}
                {...props}
            />
        )}
    />
);

export default BaseInput;
