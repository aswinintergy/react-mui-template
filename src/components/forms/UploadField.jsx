import { CloudUpload, Check } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const UploadField = ({ onChange, value, readOnly, disabled, ...props }) => {
    const handleChange = (e) => {
        let files = e.target.files[0]

        onChange(files)

        // if (isValidDoc(file.type)) {
        //     files.push(file)
        // } else {
        //     dispatch(
        //         showSnackbar({
        //             type: 'error',
        //             msg: 'Invalid file format. Please upload Word,CSV,PDF or Excel file.',
        //         })
        //     )
        // }
    }

    return (
        <div>
            <Box
                component="label"
                sx={{
                    display: 'block',
                    height: 'auto',
                    width: '100%',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    '&:hover': { outline: `1px solid #f1f1f1` },
                }}
            >
                <input
                    type="file"
                    name="excel"
                    hidden
                    onChange={handleChange}
                    multiple
                    accept=".csv"
                    disabled={disabled}
                    readOnly={readOnly}
                />
                <TextField
                    sx={{
                        pointerEvents: 'none',
                        '& input': { padding: '10px 14px' },
                        '& .MuiInputBase-root': {
                            padding: 0,
                        },
                    }}
                    value={value?.name || ''}
                    fullWidth
                    placeholder="Select file to upload"
                    inputProps={{
                        readOnly,
                    }}
                    disabled={disabled}
                    InputProps={{
                        endAdornment: (
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={disabled}
                                sx={{
                                    whiteSpace: 'nowrap',
                                    minWidth: '150px',
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                                startIcon={<CloudUpload />}
                            >
                                Upload File
                            </Button>
                        ),
                    }}
                    {...props}
                />
            </Box>
            <Box my={1} ml={0.4}>
                <Typography variant="body2" fontWeight={'bold'}>
                    Note:-
                </Typography>
                <Typography variant="body2" fontStyle={'italic'} display={'flex'} alignItems={'center'} gap={0.5}>
                    <Check fontSize="18px" color="success" /> The system only allows the upload of 'csv' files and the
                    maximum file size should not exceed 10MB
                </Typography>
            </Box>
        </div>
    )
}

export default UploadField
