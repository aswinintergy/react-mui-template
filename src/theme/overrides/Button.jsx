export default function MuiButton(theme) {
    return {
        MuiButton: {
            defaultProps: {
                color: 'warning',
            },
            styleOverrides: {
                root: {
                    minWidth: 100,
                },
                outlinedSizeMedium: {
                    padding: '10px 16px',
                },
                containedSizeMedium: {
                    padding: '11px 16px',
                },
                textSizeMedium: {
                    padding: '11px 16px',
                },
            },
        },
    }
}
