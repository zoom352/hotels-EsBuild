import {combineReducers, configureStore, Middleware} from "@reduxjs/toolkit";
import hotelReducer from "./reducers/HotelsSlice"
import {hotelAPI} from "../services/PostService";
import isAuthReducer from "./reducers/AuthSlice";

const rootReducer = combineReducers({
    hotelReducer,
    isAuthReducer
    // [hotelAPI.reducerPath]: hotelAPI.reducer
})

const localStorageMiddleware: Middleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('state', JSON.stringify(store.getState()));
    return result;
}

const persistedState = localStorage.getItem('state')
    ? JSON.parse(localStorage.getItem('state'))
    : {}

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: persistedState,
        // middleware: [localStorageMiddleware]
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(localStorageMiddleware) // hotelAPI.middleware
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
