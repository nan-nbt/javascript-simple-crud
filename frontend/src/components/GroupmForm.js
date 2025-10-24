import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    FormControlLabel,
    Switch,
    CircularProgress,
    Alert
} from '@mui/material';
import GroupmService from '../services/groupmService';

const GroupmForm = ({ open, onClose, groupm, onSuccess }) => {
    const [formData, setFormData] = useState({
        groupm_no: '',
        groupm_name: '',
        groupm_name_en: '',
        enabled: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (groupm) {
            setFormData({
                groupm_no: groupm.groupm_no || '',
                groupm_name: groupm.groupm_name || '',
                groupm_name_en: groupm.groupm_name_en || '',
                enabled: groupm.enabled === 'Y' || groupm.enabled === true
            });
        } else {
            setFormData({
                groupm_no: '',
                groupm_name: '',
                groupm_name_en: '',
                enabled: true
            });
        }
        setError(null);
    }, [groupm, open]);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'enabled' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);

            // Convert boolean enabled to character format for database
            const submitData = {
                ...formData,
                enabled: formData.enabled ? 'Y' : 'N'
            };

            if (groupm) {
                await GroupmService.update(groupm.groupm_id, submitData);
            } else {
                await GroupmService.create(submitData);
            }

            onSuccess();
            onClose();
        } catch (err) {
            setError(groupm ? 'Failed to update group' : 'Failed to create group');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                {groupm ? 'Edit Group' : 'Create New Group'}
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <TextField
                        fullWidth
                        label="Group Number"
                        name="groupm_no"
                        value={formData.groupm_no}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Group Name"
                        name="groupm_name"
                        value={formData.groupm_name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Group Name (English)"
                        name="groupm_name_en"
                        value={formData.groupm_name_en}
                        onChange={handleChange}
                        margin="normal"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={formData.enabled}
                                onChange={handleChange}
                                name="enabled"
                            />
                        }
                        label="Enabled"
                        sx={{ mt: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : null}
                    >
                        {loading ? 'Saving...' : (groupm ? 'Update' : 'Create')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default GroupmForm;