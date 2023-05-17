const GlobalStylings = (theme) => {
    return {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            width: '100%',
            height: 'auto',
            WebkitOverflowScrolling: 'touch',
        },
        body: {
            width: '100%',
            height: 'auto',
            color: theme.palette.grey[800],
            backgroundColor: theme.palette.background.default,
        },
        '#root': {
            width: '100%',
            height: '100%',
        },
        textarea: {
            fontFamily: 'Roboto,sans-serif',
        },
        input: {
            fontFamily: 'Roboto,sans-serif',
            '&[type=number]': {
                MozAppearance: 'textfield',
                '&::-webkit-outer-spin-button': {
                    margin: 0,
                    WebkitAppearance: 'none',
                },
                '&::-webkit-inner-spin-button': {
                    margin: 0,
                    WebkitAppearance: 'none',
                },
            },
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px white inset !important;',
                '&:hover': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
                '&:focus': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
                '&:active': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important;',
                },
            },
        },
        img: {
            display: 'block',
            maxWidth: '100%',
        },
        '&.flex-Align': {
            marginTop: theme.spacing(2.6),
        },
    }
}

export default GlobalStylings
