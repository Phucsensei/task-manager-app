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

interface ConfirmDeleteProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ open, onClose, onConfirm }) => {
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
                    backgroundColor: '#2D2D2D',
                    border: '1px solid #404040',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)'
                }
            }}
        >
            <DialogTitle textAlign="center" sx={{ pb: 1 }}>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    component="div"
                    color="#FFFFFF"
                >
                    Are you sure?
                </Typography>
            </DialogTitle>

            <DialogContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography
                    variant="body2"
                    color="#B0B0B0"
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
                            color: '#FFFFFF',
                            borderColor: '#404040',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderColor: '#606060'
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