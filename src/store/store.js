import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from './AuthSlice'

console.log('hiii store')
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
    },
})

export default store