import React from 'react'
// mui
import { Box, Divider, Stack, Typography } from '@mui/material'
// components
import FormFields from './FormFields'
import Buttons from './Buttons'
import Typographies from './Typographies'
import Tables from './Tables'
import DataGrids from './DataGrids'
import TabContainers from './TabContainers'

const Docs = () => {
    return (
        <Stack spacing={3}>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Design Documentation
                </Typography>
                <Divider flexItem />
            </Box>

            <Typographies />

            <Divider flexItem />

            <Buttons />

            <Divider flexItem />

            <TabContainers />
            <Divider flexItem />

            <FormFields />
            <Divider flexItem />

            <Tables />
            <Divider flexItem />

            <DataGrids />
        </Stack>
    )
}

export default Docs
