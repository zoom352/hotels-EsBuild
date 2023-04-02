import React from 'react';
import "./index.module.css"

const Button = (props: any) => {
    const {
        title,
        onClick
    } = props

    return (
        <>
            <button
                className="button"
                onClick={onClick}
            >
                {title}
            </button>
        </>
    )
}

export default Button
