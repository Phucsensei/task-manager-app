import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Typography,
    Stack
} from '@mui/material';
import { useTheme } from '../context/ThemeContext';

interface ConfirmDeleteProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ open, onClose, onConfirm }) => {
    const { darkMode } = useTheme(); // Access darkMode from context

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '16px',
                    padding: 2,
                    backgroundColor: darkMode ? '#2D2D2D' : '#FFFFFF', // Dark mode background color
                    border: darkMode ? '1px solid #404040' : '1px solid #E0E0E0', // Border color based on dark mode
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)'
                }
            }}
        >
            <DialogTitle textAlign="center" sx={{ pb: 1 }}>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    component="div"
                    color={darkMode ? '#FFFFFF' : '#333333'} // Title color based on dark mode
                >
                    Are you sure?
                </Typography>
            </DialogTitle>

            <DialogContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography
                    variant="body2"
                    color={darkMode ? '#B0B0B0' : '#333333'} // Content color based on dark mode
                    sx={{ lineHeight: 1.6 }}
                >
                    This action cannot be undone. All values associated with this item will be permanently removed.
                </Typography>
            </DialogContent>

            <DialogActions sx={{ pt: 3, px: 3 }}>
                <Stack
                    spacing={2}
                    direction="row"
                    width="100%"
                    justifyContent="center"
                >
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        size="large"
                        sx={{
                            px: 4,
                            borderRadius: '8px',
                            textTransform: 'none',
                            color: darkMode ? '#FFFFFF' : '#333333', // Cancel button text color
                            borderColor: darkMode ? '#404040' : '#E0E0E0', // Border color for cancel button
                            '&:hover': {
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#F0F0F0',
                                borderColor: darkMode ? '#606060' : '#B0B0B0'
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={onConfirm}
                        size="large"
                        sx={{
                            px: 4,
                            borderRadius: '8px',
                            textTransform: 'none',
                            backgroundColor: '#F44336',
                            color: '#FFFFFF',
                            '&:hover': {
                                backgroundColor: '#D32F2F',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        Yes, delete it
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDelete;
