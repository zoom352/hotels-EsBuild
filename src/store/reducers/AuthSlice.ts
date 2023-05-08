import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IsAuthState {
    isAuth: boolean
}

const initialState: IsAuthState = {
    isAuth: false
}

export const isAuthSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})

const isAuthReducer = isAuthSlice.reducer

export default isAuthReducer
