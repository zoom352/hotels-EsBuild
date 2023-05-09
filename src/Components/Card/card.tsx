import React, {useEffect} from 'react';
import Like from "../Like/like";
import Rating from "../rating/rating";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {hotelSlice} from "../../store/reducers/HotelsSlice";

interface Props {
    withoutIcon?: boolean,
    hotelName: string,
    stars: number,
    price: number,
    deleteFavoriteHotel: any,
    addFavoriteHotel?: () => void,
    hotelId: number,
    outputDateStr: string
}

const Card = (props: Props) => {
    const {
        withoutIcon,
        hotelName,
        stars,
        price,
        deleteFavoriteHotel,
        addFavoriteHotel,
        hotelId,
        outputDateStr
    } = props
    const {
        days,
        favoriteHotels
    } = useAppSelector(state => state.hotelReducer)
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="insideCard">
                <div className="like">
                    <Like
                        deleteFavoriteHotel={deleteFavoriteHotel}
                        addFavoriteHotel={addFavoriteHotel}
                        hotelId={hotelId}
                    />
                </div>
                <div className="save">
                    <p className="hotelName">{hotelName}</p>
                </div>
                <div className="checkIn">
                    <p>{outputDateStr} <span className="tire">-</span><span className="tire2">{days} day</span></p>
                </div>
                <div className="rating">
                    <Rating star={stars}/>
                    <div className="wrapPrice">
                        <p className="price">Price:</p>
                        <p className="valut">{price} р.</p>
                    </div>
                </div>
            </div>
            {withoutIcon && <hr/>}
        </>
    );
};

export default Card
