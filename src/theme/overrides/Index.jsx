import MuiAutocomplete from './Autocomplete'
import MuiButton from './Button'
import MuiTextField from './TextField'

export default function ComponentsOverrides(theme) {
    return Object.assign(MuiTextField(theme), MuiAutocomplete(theme), MuiButton(theme))
}
