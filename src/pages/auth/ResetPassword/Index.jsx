import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Images from 'configs/images'
import React from 'react'
import { Lock, Mail } from '@mui/icons-material'
import AuthContainer from '../AuthContainer'
const ResetPassword = () => {
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
                    label="New Password"
                    placeholder="Enter New Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Mail />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    className="auth-field"
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box textAlign={'center'} pt={3}>
                    <Button variant="contained" color="warning" className="auth-btn">
                        Set Password
                    </Button>
                </Box>
            </Stack>
        </AuthContainer>
    )
}

export default ResetPassword
