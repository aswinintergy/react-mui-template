import { pxToRem } from 'theme/typography'

export default function MuiTextField(theme) {
    return {
        MuiTextField: {
            defaultProps: {
                size: 'small',
                InputLabelProps: {
                    shrink: true,
                },
            },
            styleOverrides: {
                root: {
                    '&.MuiInputBase-multiline .MuiInputBase-inputMultiline': {
                        padding: 0,
                    },

                    '& .MuiOutlinedInput-notchedOutline': {
                        // borderColor: '#ccc',
                        left: 0,
                        top: 0,
                        '& legend': {
                            display: 'none',
                        },
                    },
                    '&.Mui-disabled': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.action.disabledBackground,
                        },
                    },

                    '& label + .MuiOutlinedInput-root': {
                        marginTop: theme.spacing(2.8),
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[600],
                },
                shrink: {
                    transform: 'translate(2px, 1px) scale(0.80)',
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: pxToRem(12),
                    marginLeft: 2,
                    marginTop: 2,
                },
            },
        },
    }
}
