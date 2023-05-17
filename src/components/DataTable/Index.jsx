import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import GridFooter from './GridFooter'

const DataTable = (props) => {
    return (
        <Box>
            <DataGrid
                slots={{
                    footer: GridFooter,
                }}
                disableRowSelectionOnClick
                disableColumnMenu
                pagination
                density="compact"
                autoHeight
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
                {...props}
            />
        </Box>
    )
}

export default DataTable
