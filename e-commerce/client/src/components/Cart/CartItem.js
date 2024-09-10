import React from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../slices/cartSlice";

export default function CartItem({item, setRefresh})
{
    
    const dispatch = useDispatch();

    const handleRemoveCartItem = () => {
        setRefresh(true);
        setRefresh(false);
        dispatch(removeItem(item.id));
    }

    return (
        <div className="flex flex-row items-center gap-3 w-full h-20 ring-2 ring-black">
            <img className="object-cover w-20 h-20" src="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6" />
            <h1 className="rounded bg-[#748CAB] ">Name</h1>
            <div className="grow" ></div>
            <p>Price</p>
            <button className="pr-3" onClick={handleRemoveCartItem} >X</button>
        </div>
    )
}