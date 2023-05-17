export default function MuiTableContainer(theme) {
    return {
        MuiTable: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0 7px',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: theme.palette.common.white,
                    fontWeight: 500,
                    '&:first-of-type': {
                        borderTopLeftRadius: theme.spacing(0.7),
                        borderBottomLeftRadius: theme.spacing(0.7),
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: theme.spacing(0.7),
                        borderBottomRightRadius: theme.spacing(0.7),
                    },
                },
                body: {
                    borderTop: `1px solid ${theme.palette.grey[300]}`,
                    '&:first-of-type': {
                        borderLeft: `1px solid ${theme.palette.grey[300]}`,
                        borderTopLeftRadius: theme.spacing(0.7),
                        borderBottomLeftRadius: theme.spacing(0.7),
                    },
                    '&:last-of-type': {
                        borderRight: `1px solid ${theme.palette.grey[300]}`,
                        borderTopRightRadius: theme.spacing(0.7),
                        borderBottomRightRadius: theme.spacing(0.7),
                    },
                    color: theme.palette.text.primary,
                },
                sizeSmall: {
                    padding: '2px 16px',
                    height: 40,
                },
            },
        },
    }
}
