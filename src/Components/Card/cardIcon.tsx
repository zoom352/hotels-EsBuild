import React from 'react';
import "./card.module.css"
// @ts-ignore
import roof from "../../../assets/roof.png"
// @ts-ignore
import house from "../../../assets/house.png"
import Rating from "../rating/rating";
import Like from "../Like/like";
import Card from "./card";

const CardIcon = (props: any) => {

    return (
        <div>
            <div className="card">
                <div className="icon">
                    <img className="roof" src={roof}/>
                    <img className="house" src={house}/>
                </div>
                <Card />
                {/*<div className="insideCard">*/}
                {/*    <div className="save">*/}
                {/*        <p className="hotelName">Kiev Grand</p>*/}
                {/*        <Like />*/}
                {/*    </div>*/}
                {/*    <div className="checkIn">*/}
                {/*        <p>20 January 2023 <span className="tire">-</span><span className="tire2">1 day</span></p>*/}
                {/*    </div>*/}
                {/*    <div className="rating">*/}
                {/*        <Rating star={3}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="wrapPrice">*/}
                {/*    <p className="price">Price:</p>*/}
                {/*    <p className="valut">23000 р.</p>*/}
                {/*</div>*/}
            </div>
            <hr/>
        </div>
    );
};

export default CardIcon;
