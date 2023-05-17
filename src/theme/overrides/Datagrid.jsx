export default function MuiDatagrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    // border: 'none',
                    '& .MuiDataGrid-virtualScrollerContent': {
                        gap: 7,
                        '& .MuiDataGrid-withBorderColor': {
                            // borderTop: `1px solid ${theme.palette.grey[300]}`,
                            '&:first-of-type': {
                                borderLeft: `1px solid ${theme.palette.grey[300]}`,
                                borderTopLeftRadius: theme.spacing(0.2),
                                borderBottomLeftRadius: theme.spacing(0.2),
                            },
                            '&:last-of-type': {
                                borderRight: `1px solid ${theme.palette.grey[300]}`,
                                borderTopRightRadius: theme.spacing(0.2),
                                borderBottomRightRadius: theme.spacing(0.2),
                            },
                        },
                    },
                    '& .MuiDataGrid-columnHeader': {
                        '&:first-of-type': {
                            borderTopLeftRadius: theme.spacing(0.7),
                            borderBottomLeftRadius: theme.spacing(0.7),
                        },
                        '&:last-of-type': {
                            borderTopRightRadius: theme.spacing(0.7),
                            borderBottomRightRadius: theme.spacing(0.7),
                        },
                    },
                },

                columnSeparator: {
                    display: 'none',
                },
                columnHeaders: {
                    backgroundColor: theme.palette.secondary.main,
                },
                columnHeaderTitle: {
                    color: theme.palette.common.white,
                },
            },
        },
    }
}
