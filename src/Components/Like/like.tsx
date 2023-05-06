import React, {useEffect, useState} from 'react'
import "./like.module.css"
import {useAppSelector} from "../../hooks/redux"

const Like = (
    {onClick, hotelId, deleteFavoriteHotel, addFavoriteHotel}: any
) => {
    const [heart, setHeart] = useState(["heart"])
    const {
        favoriteHotels,
        hotels
    } = useAppSelector(state => state.hotelReducer)

    useEffect(() => {
        favoriteHotels.map((item: any) => {
            if(item.hotelId === hotelId) {
                setHeart(["heartRed"])
            }
        })
    }, [])

    const likeChange = () => {
        if (heart.join(" ") === "heartRed") {
            deleteFavoriteHotel(hotelId)
            setHeart(["heart"])
            hotels.map((item: any) => {
                if (item.hotelId === hotelId) {
                    setHeart(["heart"])
                }
            })
        } else {
            setHeart(["heartRed"])
            onClick()
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
