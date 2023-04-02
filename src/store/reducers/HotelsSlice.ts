import {IHotel} from "../../models/IHotel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setupStore} from "../store";

interface HotelsState {
    hotels: IHotel[];
    favoriteHotels: IHotel[];
    isLoading: boolean;
    error: string;
    query: string,
    days: number,
    checkIn: string,
    checkOut: string
}

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("favoriteHotels");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log("Unable to load state from localStorage:", error);
        return undefined;
    }
};

const initialState: HotelsState = {
    hotels: [],
    isLoading: false,
    error: "",
    favoriteHotels: loadStateFromLocalStorage() || [],

    query: "",
    days: 0,
    checkIn: "",
    checkOut: ""
}

export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        hotelsFetching(state) {
            state.isLoading = true
        },
        hotelsFetchingSuccess(state, action: PayloadAction<IHotel[]>) {
            state.isLoading = false,
            state.error = "",
            state.hotels = action.payload
        },
        hotelsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false,
            state.error = action.payload
        },
        favoriteHotelsAdd(state, action: PayloadAction<any>) {
            state.hotels.map((item: any) => {
                if(item.hotelId === action.payload.hotelId) {
                    state.favoriteHotels.push(item)
                }
            })
        },
        onChangeLocation(state, action: PayloadAction<string>) {
            state.query = action.payload
        },
        onChangeDate(state, action: PayloadAction<string>) {
            state.checkIn = action.payload
        },
        onChangeAmountDays(state, action: PayloadAction<number>) {
            state.days = action.payload
        },
        onChangeCheckout(state, action: PayloadAction<string>) {
            state.checkOut = action.payload
        },
    },
})

const hotelSliceReducer = hotelSlice.reducer;

const saveStateToLocalStorage = (state: HotelsState) => {
    try {
        const serializedState = JSON.stringify(state.favoriteHotels);
        localStorage.setItem("favoriteHotels", serializedState);
    } catch (error) {
        console.log("Unable to save state to localStorage:", error);
    }
};

// добавляем слушателя для сохранения данных в localStorage после каждого изменения favoriteHotels

export default hotelSliceReducer;
