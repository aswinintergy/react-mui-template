import { Box, Divider, Typography } from '@mui/material'
import DataTable from 'components/DataTable/Index'
import React from 'react'
const DataGrids = () => {
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: 10,
        page: 0,
    })

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Datagrid
            </Typography>
            <Divider flexItem />
            <Box className="content" bgcolor={'background.paper'} p={2}>
                <DataTable
                    rows={rows}
                    columns={columns}
                    rowCount={20}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    getRowId={(row) => row.id}
                />
            </Box>
        </Box>
    )
}

export default DataGrids

const columns = [
    {
        field: 'id',
        headerName: 'No.',
        width: 70,
        renderCell: (params) => {
            return params.row.id
        },
    },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'account', headerName: 'Account', width: 170 },
    { field: 'centre', headerName: 'Centre', width: 170 },
    { field: 'debits', headerName: 'Debits', width: 170 },
    { field: 'credits', headerName: 'Credits', width: 170 },
    { field: 'description', headerName: 'Description', width: 250, flex: 1 },
    { field: 'policy', headerName: 'Policy', width: 170 },
]

const rows = [
    {
        id: 1,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 2,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 3,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 4,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 5,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 6,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 7,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 8,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 9,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
    {
        id: 10,
        date: '10/31/2023',
        account: '481115C',
        centre: '16A219RR',
        debits: '63335.4',
        credits: '1239.9',
        description: 'R/I PREM.AD&D Ren 9RR',
        policy: '654786',
    },
]
