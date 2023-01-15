import React from 'react';
import Like from "../Like/like";
import Rating from "../rating/rating";

const Card = (props: any) => {
    const {
        withoutIcon
    } = props

    return (
        <>
            <div className="insideCard">
                <div className="like">
                    <Like />
                </div>
                <div className="save">
                    <p className="hotelName">Kiev Grand</p>
                </div>
                <div className="checkIn">
                    <p>20 January 2023 <span className="tire">-</span><span className="tire2">1 day</span></p>
                </div>
                <div className="rating">
                    <Rating star={3}/>
                    <div className="wrapPrice">
                        <p className="price">Price:</p>
                        <p className="valut">23000 р.</p>
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
