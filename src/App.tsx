import React, {useState} from 'react';
import './index.css'
// @ts-ignore
import Logo from './Logo.png'
import ImageSlider from "./Components/Slider/Slider";
import SimpleSlider from "./Components/Slider/Slider";
import WorkBox from "./Components/workBox/workBox";
import HotelList from "./views/HotelList";


const App = () => {

    return (
        <div>
            <HotelList />
        </div>
    );
};

export default App;
