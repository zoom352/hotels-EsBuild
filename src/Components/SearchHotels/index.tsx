import React, {useEffect, useState} from 'react';
import "./index.module.css"
import Button from "../../UI/button";
import {hotelSlice} from "../../store/reducers/HotelsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchHotelsThunk} from "../../store/reducers/ActionCreators";
import Input from "../../UI/Input";

const SearchHotels = () => {
    const {hotels, days, checkIn} = useAppSelector(state => state.hotelReducer)
    // const {increment} = hotelSlice.actions
    const dispatch = useAppDispatch()

    const onChangeLocation = (event: any) => {
        dispatch(hotelSlice.actions.onChangeLocation(event.target.value))
    }

    const onChangeDate = (event: any) => {
        console.log("event", event)
        dispatch(hotelSlice.actions.onChangeDate(event.target.value))
    }

    const onChangeAmountDays = (event: any) => {
        dispatch(hotelSlice.actions.onChangeAmountDays(Number(event.target.value)))
    }

    const searchHotels = () => {
        const newDate = new Date(checkIn);
        newDate.setDate(newDate.getDate() + days);
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        dispatch(hotelSlice.actions.onChangeCheckout(formattedDate));
        dispatch(fetchHotelsThunk())
    }

    return (
        <div style={{ display: "flex", marginTop: "20px" }}>
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
                <div style={{ marginTop: "30px" }}>
                    <span className="location">location</span>
                <Input
                    type="text"
                    onChange={onChangeLocation}
                />
                    <div style={{ marginTop: "30px" }}>
                        <span className="location">check-in date</span>
                    </div>
                <Input
                    onChange={onChangeDate}
                    type="date"
                />
                    <div style={{ marginTop: "30px" }}>
                        <span className="location">amount of days</span>
                    </div>
                <Input
                    type="number"
                    value={days}
                    onChange={onChangeAmountDays}
                />
                    <div style={{ marginTop: "30px" }}>
                        <Button
                            onClick={searchHotels}
                            title="Search"
                        />
                    </div>
                </div>
        </div>
    );
};

export default SearchHotels;
