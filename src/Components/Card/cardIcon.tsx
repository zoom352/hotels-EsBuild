import React, {useEffect} from 'react';
import "./card.module.css"
// @ts-ignore
import roof from "../../../assets/roof.png"
// @ts-ignore
import house from "../../../assets/house.png"
import Rating from "../rating/rating";
import Like from "../Like/like";
import Card from "./card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {hotelSlice} from "../../store/reducers/HotelsSlice";

const CardIcon = (props: any) => {
    const {
        addFavoriteHotel,
        deleteFavoriteHotel,
        outputDateStr
    } = props
    const {hotels, favoriteHotels} = useAppSelector(state => state.hotelReducer)
    const dispatch = useAppDispatch()

    // const onClick = (hotelId: any) => {
    //     dispatch(hotelSlice.actions.favoriteHotelsAdd({
    //         hotelId
    //     }))
    // }
        // favoriteHotels.map((item: any) => {
        //     if(item.hotelId === hotelId) {
        //         setHeart([item.color])
        //     }
        // })
        // item.color = "heartRed"
    useEffect(() => {
        favoriteHotels.map((item: any) => {
            const hotelId = item.hotelId
                dispatch(hotelSlice.actions.checkHotelsRestart({
                    hotelId
                }))
        })
    }, [])

    return (
        <div>
            {hotels.map((item: any) => {
                return (
            <div>
                <div className="card">
                    <div className="icon">
                        <img className="roof" src={roof}/>
                        <img className="house" src={house}/>
                    </div>
                           <Card
                               deleteFavoriteHotel={deleteFavoriteHotel}
                               hotelId={item.hotelId}
                               addFavoriteHotel={() => addFavoriteHotel(item.hotelId)}
                               hotelName={item.hotelName}
                               stars={item.stars}
                               outputDateStr={outputDateStr}
                               price={item.priceAvg}
                           />
                </div>
                <hr/>
            </div>
                )
            })}
        </div>
    );
};

export default CardIcon;
