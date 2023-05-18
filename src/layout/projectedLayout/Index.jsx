import { Container, Typography, styled } from '@mui/material'
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
            <Footer>
                <Typography varaint="body2" className="footer-text">
                    © Copyright 2023{' '}
                    <Typography varaint="inherit" color={'warning.main'} component={'span'}>
                        Aegon Insights Pty Ltd
                    </Typography>{' '}
                </Typography>
            </Footer>
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
        paddingBottom: 60,
    },
}))

const Footer = styled('footer')(({ theme }) => ({
    width: '100%',
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: 0,
}))
