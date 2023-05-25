import { Box, MenuItem, Pagination, PaginationItem, Select, Stack, Typography } from '@mui/material'
import {
    gridFilteredTopLevelRowCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    gridRowCountSelector,
    useGridApiContext,
    useGridRootProps,
    useGridSelector,
} from '@mui/x-data-grid'

const getPageCount = (rowCount, pageSize) => {
    if (pageSize > 0 && rowCount > 0) {
        return Math.ceil(rowCount / pageSize)
    }

    return 0
}

const GridFooter = () => {
    const apiRef = useGridApiContext()
    const rowCount = useGridSelector(apiRef, gridRowCountSelector)
    const rootProps = useGridRootProps()
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector)
    const page = useGridSelector(apiRef, gridPageSelector)
    const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector)
    const pageCount = getPageCount(rootProps.rowCount ?? visibleTopLevelRowCount, pageSize)

    if (rowCount) {
        return (
            <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'space-between'}
                p={1.5}
                className="MuiDataGrid-footer"
            >
                <Box>
                    <Typography variant="body2" component={'span'} pr={1}>
                        Showing {page * pageSize + 1} to{' '}
                        {rowCount > pageSize * (page + 1) ? pageSize * (page + 1) : rowCount} of {rowCount} entries
                    </Typography>
                    <Select
                        variant="outlined"
                        size="small"
                        value={pageSize}
                        onChange={(e) => apiRef.current.setPageSize(e.target.value)}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </Box>
                <Pagination
                    count={pageCount}
                    page={page + 1}
                    onChange={(event, value) => apiRef.current.setPage(value - 1)}
                    color="warning"
                    //showFirstButton showLastButton
                    size="small"
                    renderItem={(item) => (
                        <PaginationItem components={{ previous: PreviousButton, next: NextButton }} {...item} />
                    )}
                />
            </Stack>
        )
    }
}

export default GridFooter

const PreviousButton = () => {
    return <>Prev</>
}

const NextButton = () => {
    return <>Next</>
}
