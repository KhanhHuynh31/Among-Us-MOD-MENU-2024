import { configureStore } from '@reduxjs/toolkit'
import { ModalReducer } from './reducers/ModalReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

export const store = configureStore({
    reducer: {
        ModalReducer,
        LoadingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})


