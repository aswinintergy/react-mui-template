import { Box, Divider, Typography } from '@mui/material'
import TabContainer from 'components/TabContainer'
import React from 'react'

const TabContainers = () => {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Tab
            </Typography>
            <Divider flexItem />
            <Box className="content" bgcolor={'background.paper'} p={2}>
                <TabContainer tabConfig={tabConfig} />
            </Box>
        </Box>
    )
}

export default TabContainers

const tabConfig = [
    {
        id: 0,
        label: 'Manual Journal Entry',
        content: 'Manual Journal Entry',
    },
    {
        id: 1,
        label: 'GLInterface file',
        content: 'GLInterface file',
    },
    {
        id: 2,
        label: 'Accounts',
        content: 'Accounts',
    },
]
