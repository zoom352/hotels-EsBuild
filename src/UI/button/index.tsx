import React from 'react';
import "./index.module.css"

const Button = (props: any) => {
    const {
        title
    } = props

    return (
        <>
            <button
                className="button"
            >
                {title}
            </button>
        </>
    )
}

export default Button
