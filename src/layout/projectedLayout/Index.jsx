import { Container, styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Index'

const ProtectedLayout = () => {
    return (
        <Root>
            <Header />
            <Container maxWidth={'xxl'} className="content">
                <Outlet />
            </Container>
        </Root>
    )
}

export default ProtectedLayout

// styles
const Root = styled('main')(({ theme }) => ({
    position: 'relative',
    // display: "flex",
    minHeight: '100vh',
    '& .content': {
        paddingBlock: theme.spacing(2),
    },
}))
