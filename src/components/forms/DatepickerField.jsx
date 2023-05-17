import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'

const DatepickerField = (props) => {
    const { inputProps, readOnly, ...rest } = props

    const [open, setOpen] = useState(false)

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    readOnly={readOnly}
                    {...rest}
                    slotProps={{
                        textField: {
                            ...inputProps,
                            onClick: (e) => !readOnly && setOpen(true),
                        },
                        actionBar: {
                            actions: ['clear'],
                        },
                        layout: {
                            sx: {
                                '& .MuiDayCalendar-slideTransition': {
                                    minHeight: 200,
                                },
                            },
                        },
                    }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default DatepickerField
