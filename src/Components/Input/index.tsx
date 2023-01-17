import React from 'react';
import "./input.module.css"

const Input = (props: any) => {
    const {
        width,
        height,
        placeholder = ""
    } = props
    return (
        <div className="wrapInput">
            <input
                style={{width: width + "px", height: height + "px"}}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
