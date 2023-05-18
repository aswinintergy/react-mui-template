import { Box, Stack } from '@mui/material'
import PageContainer from 'components/PageContainer'

import React from 'react'
import UploadForm from './UploadForm'
import RecentFiles from './RecentFiles'
import RejectedFiles from './RejectedFiles'

const Upload = () => {
    return (
        <PageContainer title={'Upload'}>
            <Box p={2}>
                <Stack spacing={3}>
                    <UploadForm />
                    <RecentFiles />
                    <RejectedFiles />
                </Stack>
            </Box>
        </PageContainer>
    )
}

export default Upload
