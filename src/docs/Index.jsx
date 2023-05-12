import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import AutocomleteField from 'components/forms/AutocomleteField'

import React from 'react'

const Docs = () => {
    return (
        <Stack spacing={3}>
            <Box>
                <Typography variant="h5" gutterBottom>
                    Design Documentation
                </Typography>
                <Divider flexItem />
            </Box>

            <Box>
                <Typography variant="h6" gutterBottom>
                    Typography
                </Typography>
                <Divider flexItem />
                <Box className="content" bgcolor={'background.paper'} p={2}>
                    <Typography variant="h5" gutterBottom>
                        Page Title
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Section Title
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
                        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
                        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </Box>
            </Box>

            <Divider flexItem />

            <Box>
                <Typography variant="h6" gutterBottom>
                    Button
                </Typography>
                <Divider flexItem />
                <Box className="content" bgcolor={'background.paper'} p={2} display={'flex'} gap={2}>
                    <Button variant="contained">submit</Button>
                    <Button variant="outlined">submit</Button>
                    <Button variant="text">submit</Button>
                    <Button color="primary" variant="contained">
                        submit
                    </Button>
                </Box>
            </Box>

            <Divider flexItem />

            <Box>
                <Typography variant="h6" gutterBottom>
                    Form Fields
                </Typography>
                <Divider flexItem />
                <Box
                    className="content"
                    bgcolor={'background.paper'}
                    p={2}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <TextField label="First Name" placeholder="Enter first Name" />
                    <AutocomleteField
                        options={[
                            { label: 'one', id: 1 },
                            { label: 'two', id: 2 },
                        ]}
                        value={1}
                        label="First Name"
                        placeholder="Enter first Name"
                        fullWidth
                    />

                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <TextField label="First Name" placeholder="Enter first Name" />
                        <AutocomleteField
                            options={[
                                { label: 'one', id: 1 },
                                { label: 'two', id: 2 },
                            ]}
                            value={1}
                            label="First Name"
                            placeholder="Enter first Name"
                        />
                        <Button variant="contained" color="secondary" className="formAlign">
                            submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}

export default Docs
