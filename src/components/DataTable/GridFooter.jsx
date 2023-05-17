import { Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import {
    gridPageCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    gridRowCountSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid'

const GridFooter = () => {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector)
    const rowCount = useGridSelector(apiRef, gridRowCountSelector)

    if (rowCount) {
        return (
            <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'space-between'}
                p={1.5}
                className="MuiDataGrid-footer"
            >
                <Typography variant="body2">
                    Showing {page * pageSize + 1} to{' '}
                    {rowCount > pageSize * (page + 1) ? pageSize * (page + 1) : rowCount} of {rowCount} entries
                </Typography>
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
