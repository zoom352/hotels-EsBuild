import React from 'react';
import Like from "../Like/like";
import Rating from "../rating/rating";
import {useAppSelector} from "../../hooks/redux";

const Card = (props: any) => {
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
        days
    } = useAppSelector(state => state.hotelReducer)

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
            {/*<div className="wrapPrice">*/}
            {/*    <p className="price">Price:</p>*/}
            {/*    <p className="valut">23000 р.</p>*/}
            {/*</div>*/}
            {withoutIcon && <hr/>}
        </>
    );
};

export default Card
