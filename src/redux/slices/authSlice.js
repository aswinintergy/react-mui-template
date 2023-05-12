// redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action) => {
            const { token, user } = action.payload

            state.loading = true
            state.token = token
            state.user = user
        },
    },
})

export const { authLogin } = authSlice.actions

export const getAuth = (state) => state.auth
export const getUser = (state) => state.auth.user

export default authSlice.reducer
