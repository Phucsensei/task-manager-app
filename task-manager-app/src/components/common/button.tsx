import * as React from 'react';
import MuiButton, { ButtonPropsColorOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

interface CustomButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    color?: OverridableStringUnion<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning", ButtonPropsColorOverrides>;
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset"; // Add the type property
    className?: string; // Add the className property
}

const BaseButton: React.FC<CustomButtonProps> = ({ variant = 'contained', color = 'primary', onClick, children, type, className }) => {
    return (
        <MuiButton variant={variant} color={color} onClick={onClick} type={type} className={className}>
            {children}
        </MuiButton>
    );
};

export default BaseButton;