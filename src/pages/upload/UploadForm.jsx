import { Box, Button, Typography } from '@mui/material'
import AutocomleteField from 'components/forms/AutocomleteField'
import UploadField from 'components/forms/UploadField'
import React from 'react'

const UploadForm = () => {
    return (
        <Box>
            <Typography variant="h5" mb={1.5}>
                Upload files to review
            </Typography>
            <Box display={'flex'} alignItems={'flex-start'} gap={3}>
                <AutocomleteField
                    label="Select file type"
                    options={[
                        { label: 'Manual Journal Entry', id: 1 },
                        { label: 'GLInterface', id: 2 },
                    ]}
                    value={1}
                    inputProps={{
                        label: 'Month',
                        placeholder: 'Select Month',
                        error: false,
                    }}
                    sx={{ flex: 1 }}
                />

                <UploadField value={''} onChange={(file) => {}} className="flex-Align" style={{ flex: 2 }} />

                <Button className="flex-Align" variant="contained">
                    Upload
                </Button>
            </Box>
        </Box>
    )
}

export default UploadForm
