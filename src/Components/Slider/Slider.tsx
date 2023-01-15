import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./slider.module.css"

const PrevArrow = ({ ...props }) => {
    return (
        <div className="prevArrow">
            <button style={{color: 'red'}} {...props}>prev</button>
        </div>
    )
}

const NextArrow = ({ ...props }) => {
    return (
        <div className="nextArrow">
            <button {...props}>next</button>
        </div>
    )
}

const SimpleSlider = (props: any) => {
    const {
        SliderData
    } = props

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <Slider {...settings} className="mainWrapper">
            {SliderData.map((slide: any) => {
                return (
                    <div>
                        <img width="100px" src={slide.image}/>
                    </div>
                )
            })}
        </Slider>
    );
}

export default SimpleSlider;
