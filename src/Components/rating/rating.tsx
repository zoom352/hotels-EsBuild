import React from 'react';
import "./rating.module.css"

const Rating = (props: any) => {
    const {
        star
    } = props
    let oneStar = ""
    let twoStar = ""
    let threeStar = ""
    let fourStar = ""
    let fiveStar = ""

    switch (star) {
        case 1:
            oneStar = "active"
            break
        case 2:
            oneStar = "active"
            twoStar = "active"
            break
        case 3:
            oneStar = "active"
            twoStar = "active"
            threeStar = "active"
            break;
        case 4:
            oneStar = "active"
            twoStar = "active"
            threeStar = "active"
            fourStar = "active"
            break;
        case 5:
            oneStar = "active"
            twoStar = "active"
            threeStar = "active"
            fourStar = "active"
            fiveStar = "active"
            break;
        default:
            oneStar = ""
            twoStar = ""
            threeStar = ""
            fourStar = ""
            fiveStar = ""
    }

    return (
        <div className="rating-result">
            <span className={oneStar}></span>
            <span className={twoStar}></span>
            <span className={threeStar}></span>
            <span className={fourStar}></span>
            <span className={fiveStar}></span>
        </div>
    );
};

export default Rating;
