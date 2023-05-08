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

const initialState: HotelsState = {
    hotels: [],
    isLoading: false,
    error: "",
    favoriteHotels: [],

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
                    item.color = "heartRed"
                    state.favoriteHotels.push(item)
                }
            })
        },
        favoriteHotelsSortAscendingPrice(state, action: PayloadAction<any>) {
            state.favoriteHotels = state.favoriteHotels.sort((a: any, b: any) => a.priceAvg - b.priceAvg)
        },
        favoriteHotelsSortDescendingPrice(state, action: PayloadAction<any>) {
            state.favoriteHotels = state.favoriteHotels.sort((a: any, b: any) => b.priceAvg - a.priceAvg)
        },
        favoriteHotelsSortAscendingStars(state, action: PayloadAction<any>) {
            state.favoriteHotels = state.favoriteHotels.sort((a: any, b: any) => a.stars - b.stars)
        },
        favoriteHotelsSortDescendingStars(state, action: PayloadAction<any>) {
            state.favoriteHotels = state.favoriteHotels.sort((a: any, b: any) => b.stars - a.stars)
        },
        favoriteHotelsDelete(state, action: PayloadAction<any>) {
            state.favoriteHotels = state.favoriteHotels.filter((item: any) => item.hotelId !== action.payload.hotelId)
            state.hotels.map((item: any) => {
                if(item.hotelId === action.payload.hotelId) {
                    item.color = ""
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
    }
})

const hotelSliceReducer = hotelSlice.reducer

export default hotelSliceReducer
