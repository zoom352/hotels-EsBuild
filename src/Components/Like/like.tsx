import React, {useEffect, useState} from 'react'
import "./like.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/redux"
import {hotelSlice} from "../../store/reducers/HotelsSlice";

const Like = (
    {addFavoriteHotel, hotelId, deleteFavoriteHotel}: any
) => {
    const [heart, setHeart] = useState(["heart"])
    const {
        favoriteHotels,
        hotels
    } = useAppSelector(state => state.hotelReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        favoriteHotels.map((item: any) => {
            if(item.hotelId === hotelId) {
                setHeart([item.color])
            }
        })
        hotels.map((item: any) => {
            if (item.hotelId === hotelId) {
                setHeart([item.color || "heart"])
            }
        })
    }, [favoriteHotels])

    // useEffect(() => {
    //     // favoriteHotels.map((item: any) => {
    //     //     if(item.hotelId === hotelId) {
    //     //         setHeart([item.color])
    //     //     }
    //     // })
    //             // item.color = "heartRed"
    //             dispatch(hotelSlice.actions.checkHotelsRestart({
    //                 hotelId
    //             }))
    // }, [])

    const likeChange = () => {
        if (heart.join(" ") === "heartRed") {
            deleteFavoriteHotel(hotelId)
        } else {
            addFavoriteHotel()
        }
    }

    return (
        <>
            <div
                className={heart.join(" ")}
                onClick={() => likeChange()}
            ></div>
        </>
    )
}

export default Like;
