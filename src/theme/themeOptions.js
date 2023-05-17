import palette from './palette'
import shadows from './shadows'
import typography from './typography'

const themeOptions = ({ mode = 'light' }) => {
    const themeConfig = {
        palette: palette(mode),
        typography,
        // ...spacing,
        shadows: shadows(mode),
        // breakpoints: breakpoints(),
        shape: {
            borderRadius: 5,
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
