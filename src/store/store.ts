import {combineReducers, configureStore} from "@reduxjs/toolkit";
import hotelReducer from "./reducers/HotelsSlice"
import {hotelAPI} from "../services/PostService";

const rootReducer = combineReducers({
    hotelReducer,
    [hotelAPI.reducerPath]: hotelAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(hotelAPI.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
