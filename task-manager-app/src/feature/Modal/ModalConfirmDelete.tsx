import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Typography,
    Stack,
    useTheme
} from '@mui/material';

interface ConfirmDeleteProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ open, onClose, onConfirm }) => {
    const theme = useTheme();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '16px',
                    padding: theme.spacing(2)
                }
            }}
        >
            {/* Modified DialogTitle */}
            <DialogTitle textAlign="center" sx={{ pb: 1 }}>
                <Typography variant="h6" fontWeight={700} component="div"> {/* or 'span' if more semantic */}
                    Are you sure?
                </Typography>
            </DialogTitle>

            <DialogContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    This action cannot be undone. All values associated with this item will be permanently removed.
                </Typography>
            </DialogContent>

            <DialogActions sx={{ pt: 3 }}>
                <Stack spacing={2} direction="row" width="100%" justifyContent="center">
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        size="large"
                        sx={{
                            px: 4,
                            borderRadius: '8px',
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onConfirm}
                        size="large"
                        sx={{
                            px: 4,
                            borderRadius: '8px',
                            textTransform: 'none',
                            '&:hover': {
                                boxShadow: 'none',
                                backgroundColor: theme.palette.error.dark
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