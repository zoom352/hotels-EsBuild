import React from 'react';
import Input from "../Input";
import "./index.module.css"
import Button from "../../UI/button";

const SearchHotels = () => {
    return (
        <div style={{ display: "flex", marginTop: "20px" }}>
                <div style={{ marginTop: "30px" }}>
                    <span className="location">location</span>
                <Input
                    type="text"
                />
                    <div style={{ marginTop: "30px" }}>
                        <span className="location">check-in date</span>
                    </div>
                <Input
                    type="date"
                />
                    <div style={{ marginTop: "30px" }}>
                        <span className="location">amount of days</span>
                    </div>
                <Input
                    type="text"
                />
                    <div style={{ marginTop: "30px" }}>
                        <Button
                            title="Search"
                        />
                    </div>
                </div>
        </div>
    );
};

export default SearchHotels;
