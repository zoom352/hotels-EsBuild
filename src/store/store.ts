import {combineReducers, configureStore, Middleware} from "@reduxjs/toolkit";
import hotelReducer from "./reducers/HotelsSlice"
import {hotelAPI} from "../services/PostService";
import isAuthReducer from "./reducers/AuthSlice";

const rootReducer = combineReducers({
    hotelReducer,
    isAuthReducer
})

const localStorageMiddleware: Middleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('state', JSON.stringify(store.getState()));
    return result;
}

const persistedState: RootState = JSON.parse(localStorage.getItem("state") || "null") ?? undefined

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: persistedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(localStorageMiddleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
