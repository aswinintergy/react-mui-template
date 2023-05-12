import palette from './palette'
import shadows from './shadows'

const themeOptions = ({ mode = 'light' }) => {
    const themeConfig = {
        palette: palette(mode),
        typography: {
            fontFamily: 'Roboto',
        },
        // ...spacing,
        shadows: shadows(mode),
        // breakpoints: breakpoints(),
        shape: {
            borderRadius: 3,
        },
        mixins: {
            toolbar: {
                minHeight: 64,
            },
        },
    }

    return themeConfig
}

export default themeOptions
