import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import Images from 'configs/images'
import React from 'react'
import AuthContainer from '../AuthContainer'

const Otp = () => {
    return (
        <AuthContainer>
            <Stack spacing={3}>
                <div className="logo">
                    <img src={Images.LogoDark} alt="logo" />
                </div>
                <div className="">
                    <Typography variant="h3" gutterBottom>
                        Verification Code
                    </Typography>
                    <Typography variant="body2" component={'p'} color="light.lighter">
                        Lorem Ipsum has been the industry's standard dummy text ever since{' '}
                        <Typography color={'warning.main'} component={'span'}>
                            test.email@intergy.com.au
                        </Typography>{' '}
                        standard dummy text ever .
                    </Typography>
                </div>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    <TextField className="otp-field" name="1" inputProps={{ maxLength: 1 }} />
                    <TextField className="otp-field" name="2" inputProps={{ maxLength: 1 }} />
                    <TextField className="otp-field" name="3" inputProps={{ maxLength: 1 }} />
                    <TextField className="otp-field" name="4" inputProps={{ maxLength: 1 }} />
                </Stack>

                <Box textAlign={'center'} pt={3}>
                    <Button variant="contained" color="warning" className="auth-btn">
                        Submit
                    </Button>
                </Box>
            </Stack>
        </AuthContainer>
    )
}

export default Otp
