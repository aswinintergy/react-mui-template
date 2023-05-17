import MuiAutocomplete from './Autocomplete'
import MuiButton from './Button'
import MuiDatagrid from './Datagrid'
import MuiTableContainer from './TableContainer'
import MuiTabs from './Tabs'
import MuiTextField from './TextField'

export default function ComponentsOverrides(theme) {
    return Object.assign(
        MuiTextField(theme),
        MuiAutocomplete(theme),
        MuiButton(theme),
        MuiTableContainer(theme),
        MuiDatagrid(theme),
        MuiTabs(theme)
    )
}
