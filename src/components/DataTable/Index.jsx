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
                paginationMode="server"
                density="compact"
                autoHeight
                pageSizeOptions={[5, 10, 25]}
                {...props}
            />
        </Box>
    )
}

export default DataTable
