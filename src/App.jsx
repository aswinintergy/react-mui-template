import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes/Index'
import ThemeWrapper from 'theme/Index'

const App = () => {
    return (
        <BrowserRouter>
            <ThemeWrapper>
                <Routes />
            </ThemeWrapper>
        </BrowserRouter>
    )
}

export default App
