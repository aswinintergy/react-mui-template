import { Delete } from '@mui/icons-material'
import {
    Box,
    Divider,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import React from 'react'
const Tables = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Table
            </Typography>
            <Divider flexItem />
            <Box className="content" bgcolor={'background.paper'} p={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>File</TableCell>
                                <TableCell>File Type</TableCell>
                                <TableCell>Uploaded On</TableCell>
                                <TableCell>Review Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>JV_20230124_RR PREM_CLMS.csv</TableCell>
                                <TableCell>Manual Journal Entry</TableCell>
                                <TableCell>11/04/2023 14:00:00</TableCell>
                                <TableCell>Awaiting Approval</TableCell>
                                <TableCell>
                                    <IconButton color="error" size="small">
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>GLINTRFACE_20230105.csv</TableCell>
                                <TableCell>GLInterface</TableCell>
                                <TableCell>11/04/2023 13:00:00</TableCell>
                                <TableCell>Approved</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Tables
