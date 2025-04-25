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
        defaultValue="" // Đảm bảo có giá trị mặc định
        render={({ field }) => (
            <TextField
                {...field}
                label={label}
                variant="outlined"
                fullWidth
                error={error}
                helperText={error ? helperText : ''}
                InputLabelProps={{ shrink: true }}
                value={field.value || ""} // Nếu không có giá trị, sử dụng chuỗi rỗng
                {...props}
            />
        )}
    />
);

export default BaseInput;
