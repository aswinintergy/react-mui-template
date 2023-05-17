import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { AddCircle, CloudUpload, Download, Refresh, Search } from '@mui/icons-material'
const Buttons = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Button
            </Typography>
            <Divider flexItem />
            <Box className="content" bgcolor={'background.paper'} p={2} display={'flex'} gap={2}>
                <Button variant="contained">Upload</Button>
                <Button variant="outlined" color="dark">
                    Cancel
                </Button>
                <Button variant="contained" startIcon={<Search />}>
                    Search
                </Button>
                <Button color="primary" variant="contained" startIcon={<CloudUpload />}>
                    Upload File
                </Button>
                <Button variant="outlined" startIcon={<Download />}>
                    Download Report
                </Button>
                <Button variant="outlined" startIcon={<Refresh />}>
                    Reset
                </Button>
                <Button variant="outlined" startIcon={<AddCircle />}>
                    Add User
                </Button>
            </Box>
        </Box>
    )
}

export default Buttons
