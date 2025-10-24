import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Box,
    CircularProgress,
    Alert,
} from "@mui/material";
import GroupmService from "../services/groupmService";

const GroupmList = ({ onEdit, onCreate }) => {
    const [groupms, setGroupms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGroupms();
    }, []);

    const fetchGroupms = async () => {
        try {
            setLoading(true);
            const response = await GroupmService.getAll();
            setGroupms(response.data.data || []);
            setError(null);
        } catch (err) {
            setError("Failed to fetch groups");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this group?")) {
            try {
                await GroupmService.delete(id);
                fetchGroupms(); // Refresh list
            } catch (err) {
                setError("Failed to delete group");
                console.error(err);
            }
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Typography variant="h4">Group Management</Typography>
                <Button variant="contained" color="primary" onClick={onCreate}>
                    Add New Group
                </Button>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Group No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Name (EN)</TableCell>
                            <TableCell>Enabled</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groupms.map((groupm) => (
                            <TableRow key={groupm.groupm_id}>
                                <TableCell>{groupm.groupm_id}</TableCell>
                                <TableCell>{groupm.groupm_no}</TableCell>
                                <TableCell>{groupm.groupm_name}</TableCell>
                                <TableCell>{groupm.groupm_name_en}</TableCell>
                                <TableCell>
                                    {groupm.enabled === "Y" || groupm.enabled === true
                                        ? "Yes"
                                        : "No"}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size="small"
                                        onClick={() => onEdit(groupm)}
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="small"
                                        color="error"
                                        onClick={() => handleDelete(groupm.groupm_id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default GroupmList;
