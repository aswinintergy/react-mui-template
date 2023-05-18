import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const PageContainer = ({ title, children }) => {
    return (
        <Box>
            <Typography variant="h4" mb={2}>
                {title}
            </Typography>
            <Paper elevation={2} sx={{ borderRadius: 2 }}>
                {children}
            </Paper>
        </Box>
    )
}

export default PageContainer
