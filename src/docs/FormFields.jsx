import React, { useState } from 'react'
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import AutocomleteField from 'components/forms/AutocomleteField'
import DatepickerField from 'components/forms/DatepickerField'
import dayjs from 'dayjs'
import UploadField from 'components/forms/UploadField'

const FormFields = () => {
    const [value, setValue] = useState({
        input: '',
        select: null,
        date: null,
        file: '',
    })

    const [state, setState] = useState({
        error: false,
        disabled: false,
        readOnly: false,
        file: false,
    })

    const handleValue = (type, value) => {
        console.log(value)
        setValue((v) => ({ ...v, [type]: value }))
    }

    const handleState = (type) => {
        setState((s) => ({ ...s, [type]: !s[type] }))
    }
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Form Fields
            </Typography>
            <Divider flexItem />
            <Box
                className="content"
                bgcolor={'background.paper'}
                p={2}
                display={'flex'}
                flexDirection={'column'}
                gap={0}
            >
                <TextField
                    label="Text field"
                    placeholder="Enter text"
                    error={state.error}
                    helperText={state.error ? 'Text is required!' : ' '}
                    InputProps={{
                        readOnly: state.readOnly,
                    }}
                    disabled={state.disabled}
                    value={value.input}
                    onChange={(e) => handleValue('input', e.target.value)}
                />
                <AutocomleteField
                    options={[
                        { label: 'Option 1', id: 1 },
                        { label: 'Option 2', id: 2 },
                    ]}
                    inputProps={{
                        label: 'Autocomplete field',
                        placeholder: 'Select option',
                        error: state.error,
                        helperText: state.error ? 'Option is required!' : ' ',
                        // fullWidth: true,
                    }}
                    readOnly={state.readOnly}
                    disabled={state.disabled}
                    value={value.select}
                    onChange={(e, newValue) => handleValue('select', newValue)}
                />
                <DatepickerField
                    inputProps={{
                        label: 'Date field',
                        placeholder: 'Select Date',
                        error: state.error,
                        helperText: state.error ? 'Date is required!' : ' ',
                        fullWidth: true,
                    }}
                    defaultValue={dayjs('2022-04-17')}
                    readOnly={state.readOnly}
                    disabled={state.disabled}
                    value={value.date}
                    onChange={(val) => handleValue('date', val)}
                />

                <UploadField
                    value={state.file}
                    onChange={(file) => setState((s) => ({ ...s, file: file }))}
                    readOnly={state.readOnly}
                    disabled={state.disabled}
                />
                <Stack direction={'row'} alignItems={'center'} spacing={2} mt={1.3}>
                    <Button variant="outlined" color="dark" onClick={() => handleState('disabled')}>
                        Toggle disabled
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => handleState('error')}>
                        Toggle error
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => handleState('readOnly')}>
                        Toggle read only
                    </Button>
                </Stack>

                <Divider flexItem sx={{ my: 4 }} />

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <TextField label="Account Name" placeholder="Enter Account Name" />
                    <AutocomleteField
                        options={[
                            { label: 'Jan', id: 1 },
                            { label: 'Feb', id: 2 },
                            { label: 'Mar', id: 3 },
                        ]}
                        value={1}
                        inputProps={{
                            label: 'Month',
                            placeholder: 'Select Month',
                            error: false,
                        }}
                        // className="flex-Align"
                    />
                    <Button variant="contained" color="secondary" className="flex-Align">
                        submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FormFields
