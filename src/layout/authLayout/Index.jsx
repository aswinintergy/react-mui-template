import { styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const authLayout = () => {
    return (
        <Root>
            <Outlet />
        </Root>
    )
}

export default authLayout

// styles
const Root = styled('main')({
    position: 'relative',
    // display: "flex",
    minHeight: '100vh',
})
