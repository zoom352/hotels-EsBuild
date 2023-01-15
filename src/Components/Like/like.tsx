import React, {useState} from 'react'
import "./like.module.css"

const Like = () => {
    const [heart, setHeart] = useState(["heart"])

    const likeChange = () => {
        if (heart.join(" ") === "heartRed") {
            setHeart(["heart"])
        } else {
            setHeart(["heartRed"])
        }
    }

    return (
        <>
            <div
                className={heart.join(" ")}
                onClick={() => likeChange()}
            ></div>
        </>
    )
}

export default Like;
