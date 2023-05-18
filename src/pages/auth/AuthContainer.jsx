import { Box, Container, Grid, Typography, alpha, darken, styled } from '@mui/material'
import Images from 'configs/images'
import React from 'react'

const AuthContainer = ({ children }) => {
    return (
        <Root>
            <img src={Images.LogoVector} alt="logo-vector" className="logo-bg-vector" />
            <Container className="grid-wrapper">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg></Grid>
                    <Grid item xs={12} md={6} lg={5}>
                        <Box>{children}</Box>
                    </Grid>
                </Grid>
            </Container>
            <Typography varaint="body2" className="footer-text">
                © Copyright 2023{' '}
                <Typography varaint="inherit" color={'warning.main'} component={'span'}>
                    Aegon Insights Pty Ltd
                </Typography>{' '}
            </Typography>
        </Root>
    )
}

export default AuthContainer

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    background: darken(theme.palette.primary.main, 0.1),
    color: theme.palette.common.white,
    position: 'relative',
    '& .logo-bg-vector': {
        display: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 2,
        opacity: 0.4,
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    '& .footer-text': {
        position: 'absolute',
        bottom: 5,
        width: '100%',
        textAlign: 'center',
    },
    '&::after': {
        content: `''`,
        position: 'absolute',
        top: '-1042px',
        left: '-253px',
        width: '70vw',
        height: '260%',
        transform: 'rotate(43deg)',
        backgroundColor: alpha(theme.palette.common.white, 0.3),
        [theme.breakpoints.up('md')]: {
            left: '-323px',
            width: '70vw',
            backgroundColor: theme.palette.common.white,
        },
        [theme.breakpoints.up('lg')]: {
            width: '60vw',
            left: '-353px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '60vw',
            left: '-483px',
        },
    },
    '&::before': {
        content: `''`,
        position: 'absolute',
        top: '-1042px',
        left: '-259px',
        width: '70vw',
        height: '260%',
        transform: 'rotate(45deg)',
        backgroundColor: alpha(theme.palette.primary.dark, 0.3),
        [theme.breakpoints.up('md')]: {
            left: '-323px',
            width: '70vw',
            backgroundColor: alpha(theme.palette.primary.dark, 0.7),
        },
        [theme.breakpoints.up('lg')]: {
            width: '60vw',
            left: '-353px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '60vw',
            left: '-453px',
        },
    },
    '& .grid-wrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        '& .logo': {
            height: '210',
            marginInline: 'auto',
        },
        '& .auth-field': {
            '& .MuiFormLabel-root': {
                color: theme.palette.common.white,
                fontWeight: 400,
                fontSize: '1.2rem',
            },
            '& label+.MuiOutlinedInput-root': {
                marginTop: theme.spacing(3.5),
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: 60,
                backgroundColor: theme.palette.common.white,
                '& input': {
                    padding: '13px 14px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.common.white,
                },
            },
        },
        '& .otp-field': {
            '& .MuiFormLabel-root': {
                color: theme.palette.common.white,
                fontWeight: 400,
                fontSize: '1.2rem',
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: 60,
                backgroundColor: theme.palette.common.white,
                width: 56,
                '& input': {
                    padding: '13px 14px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.common.white,
                },
            },
        },
        '& .auth-btn': {
            borderRadius: '60px',
            minWidth: 180,
        },
    },
}))
