import axios from "axios";
import {IHotel} from "../../models/IHotel";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {hotelSlice} from "./HotelsSlice";
import {AppDispatch} from "../store";
import PostService from "../../Api/index"
import {useAppSelector} from "../../hooks/redux";

export const fetchHotelsThunk = () => async (dispatch: AppDispatch, getState: any) => {
    const { hotelReducer } = getState()
    let query = hotelReducer.query
    let checkIn = hotelReducer.checkIn
    let days = hotelReducer.days
    let checkOut = hotelReducer.checkOut

    try {
        dispatch(hotelSlice.actions.hotelsFetching())
        // const response = await axios.get<IHotel[]>("http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2020-12-10&checkOut=2020-12-12&limit=10")
        const response = await PostService.getAll(query, checkIn, checkOut, "10")
        dispatch(hotelSlice.actions.hotelsFetchingSuccess(response.data))
    } catch (error) {
        dispatch((hotelSlice.actions.hotelsFetchingError("error.message")))
    }
}
