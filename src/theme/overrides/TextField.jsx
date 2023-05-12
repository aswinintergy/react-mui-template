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
                        borderColor: '#ccc',
                        left: 0,
                        top: -1,
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

                    '& .MuiInputLabel-formControl.MuiInputLabel-shrink': {
                        transform: 'translate(0px, 3px) scale(0.75)',
                    },
                },
            },
        },
    }
}
