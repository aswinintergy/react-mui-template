// redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// redux-persist
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// slices
import authSlice from './slices/authSlice'

const reducers = combineReducers({
    auth: authSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    // devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)
