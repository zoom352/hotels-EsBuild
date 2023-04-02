import React from 'react';
import Like from "../Like/like";
import Rating from "../rating/rating";

const Card = (props: any) => {
    const {
        withoutIcon,
        hotelName,
        stars,
        price,
        onClick
    } = props

    return (
        <>
            <div className="insideCard">
                <div className="like">
                    <Like onClick={onClick}/>
                </div>
                <div className="save">
                    <p className="hotelName">{hotelName}</p>
                </div>
                <div className="checkIn">
                    <p>20 January 2023 <span className="tire">-</span><span className="tire2">1 day</span></p>
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
