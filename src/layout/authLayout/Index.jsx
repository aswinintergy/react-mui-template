import { styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <Root>
            <Outlet />
        </Root>
    )
}

export default AuthLayout

// styles
const Root = styled('main')({
    position: 'relative',
    // display: "flex",
    minHeight: '100vh',
})
