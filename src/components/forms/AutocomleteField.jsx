import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { isValid } from 'utils/helpers'

const AutocomleteField = (props) => {
    const { value, inputProps, onChange, options = [], getLabelBy = 'label', getValueBy = 'id', ...rest } = props

    const validateInputValue = () => {
        if (isValid(value)) {
            let valObj = options?.find((item) => {
                return item[getValueBy] === value
            })

            if (!valObj) return null
            return valObj
        } else {
            return null
        }
    }

    return (
        <Autocomplete
            options={options}
            onChange={(e, val, r) => {
                if (r === 'clear') {
                    onChange(e, null, r, null)
                } else {
                    if (val) {
                        onChange(e, val[getValueBy], r, val)
                    } else {
                        onChange(e, val, r)
                    }
                }
            }}
            value={validateInputValue()}
            getOptionLabel={(option) => option[getLabelBy] || ''}
            isOptionEqualToValue={(item, current) => item[getValueBy] === current[getValueBy]}
            {...rest}
            renderInput={(params) => {
                return <TextField {...params} {...inputProps} InputLabelProps={{ shrink: true }} />
            }}
        />
    )
}

export default AutocomleteField
