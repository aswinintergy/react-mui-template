import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Typographies = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Typography
            </Typography>
            <Divider flexItem />
            <Box className="content" bgcolor={'background.paper'} p={2}>
                <Typography variant="h4" gutterBottom>
                    Page Title
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Section Title
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Paragraph header
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Default text
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
            </Box>
        </Box>
    )
}

export default Typographies
