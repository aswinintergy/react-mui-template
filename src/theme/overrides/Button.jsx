export default function MuiButton(theme) {
    return {
        MuiButton: {
            defaultProps: {
                color: 'warning',
            },
            styleOverrides: {
                root: {
                    '&.formAlign': {
                        marginTop: theme.spacing(2.6),
                    },
                },
                sizeMedium: {
                    padding: '7.75px 16px',
                },
            },
        },
    }
}
