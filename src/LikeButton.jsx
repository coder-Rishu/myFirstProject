import { useState } from "react";

export default function LikeButton() {
    let [isLike, setIsLike] = useState(false);
    let [count, setCount] = useState(0);

    let toggleLike = () => {
        setIsLike(!isLike);
        setCount(count + 1);
    }

    return (
        <div onClick={toggleLike}>
            <p>Click = {count}</p>
            {isLike ? (<i class="fa-solid fa-heart" style={{color: "red"}}></i>) : (<i className="fa-regular fa-heart"></i>)}
        </div>
    );
}