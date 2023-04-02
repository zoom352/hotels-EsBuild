import React, {useState} from 'react'
import "./like.module.css"

const Like = ({onClick}: any) => {
    const [heart, setHeart] = useState(["heart"])

    const likeChange = () => {
        onClick()
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
