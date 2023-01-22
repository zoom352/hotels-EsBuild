import React from 'react';
import "./input.module.css"

const Input = (props: any) => {
    const {
        width = 345,
        height = 50,
        placeholder = "",
        type
    } = props
    return (
        <div className="wrapInput">
            <input
                type={type}
                style={{width: width + "px", height: height + "px"}}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
