import React, {useEffect, useState} from 'react'
import "./like.module.css"
import {useAppSelector} from "../../hooks/redux"

const Like = (
    {addFavoriteHotel, hotelId, deleteFavoriteHotel}: any
) => {
    const [heart, setHeart] = useState(["heart"])
    const {
        favoriteHotels,
        hotels
    } = useAppSelector(state => state.hotelReducer)

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
