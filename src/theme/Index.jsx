import { CssBaseline, GlobalStyles, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import themeOptions from './themeOptions'
import ComponentsOverrides from './overrides/Index'
import GlobalStylings from './GlobalStylings'

const DEFAULT_MODE = { mode: 'light' }

const ThemeWrapper = ({ children }) => {
    const coreThemeConfig = themeOptions(DEFAULT_MODE)
    // Mui theme creator
    const theme = createTheme(coreThemeConfig)
    theme.components = ComponentsOverrides(theme)

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={() => GlobalStylings(theme)} />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeWrapper
