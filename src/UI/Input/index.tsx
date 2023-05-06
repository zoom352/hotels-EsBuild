import React from 'react';
import "./input.module.css"

const Input = (props: any) => {
    const {
        width = 345,
        height = 50,
        placeholder = "",
        type,
        onChange,
        value,
        name,
        onBlur
    } = props

    return (
        <div className="wrapInput">
            <input
                type={type}
                value={value}
                style={{width: width + "px", height: height + "px"}}
                placeholder={placeholder}
                onChange={event => onChange(event)}
                name={name}
                onBlur={event => onBlur(event)}
            />
        </div>
    );
};

export default Input;
