import React from 'react'
import AuthContainer from '../AuthContainer'
import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Images from 'configs/images'
import { Mail } from '@mui/icons-material'

const ForgetPassword = () => {
    return (
        <AuthContainer>
            <Stack spacing={3}>
                <div className="logo">
                    <img src={Images.LogoDark} alt="logo" />
                </div>
                <div className="">
                    <Typography variant="h3" gutterBottom>
                        Reset Password
                    </Typography>
                    <Typography variant="body2" color="light.lighter">
                        Lorem Ipsum has been the industry's standard dummy text ever since standard dummy text ever .
                    </Typography>
                </div>
                <TextField
                    className="auth-field"
                    label="Email ID"
                    placeholder="Enter Email ID"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Mail />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box textAlign={'center'} pt={3}>
                    <Button variant="contained" color="warning" className="auth-btn">
                        Send
                    </Button>
                </Box>
            </Stack>
        </AuthContainer>
    )
}

export default ForgetPassword
