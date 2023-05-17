export default function MuiTabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                root: {},
                indicator: {
                    display: 'none',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&:first-of-type': {
                        borderTopLeftRadius: theme.spacing(1),
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: theme.spacing(1),
                    },
                },
                textColorPrimary: {
                    '&.Mui-selected': {
                        background: theme.palette.primary.main,
                        color: theme.palette.common.white,
                    },
                },
            },
        },
    }
}
