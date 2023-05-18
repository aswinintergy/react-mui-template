import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import Images from 'configs/images'
import React from 'react'
import { Lock, Mail } from '@mui/icons-material'
import AuthContainer from '../AuthContainer'

const Login = () => {
    return (
        <AuthContainer>
            <Stack spacing={3}>
                <div className="logo">
                    <img src={Images.LogoDark} alt="logo" />
                </div>
                <div className="">
                    <Typography variant="h3" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body2" color="light.lighter">
                        Lorem Ipsum has been the industry's standard dummy text ever since standard dummy text ever .
                    </Typography>
                </div>
                <TextField
                    className="auth-field"
                    label="Email ID"
                    placeholder="Enter email Id"
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
                    label="Password"
                    placeholder="Enter password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'}>
                    <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Remember me?" />
                    <Link color={'warning.main'}>Forget Password?</Link>
                </Stack>
                <Box textAlign={'center'}>
                    <Button variant="contained" color="warning" className="auth-btn">
                        Login
                    </Button>
                </Box>
            </Stack>
        </AuthContainer>
    )
}

export default Login
