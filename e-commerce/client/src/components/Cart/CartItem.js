import React from "react";


export default function CartItem()
{
    return (
        <div className="flex flex-row items-center gap-3 w-full h-20 ring-2 ring-black">
            <img className="object-cover w-20 h-20" src="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6" />
            <h1 className="rounded bg-[#748CAB] ">Name</h1>
            <div className="grow" ></div>
            <p>Price</p>
            <button className="pr-3" >X</button>
        </div>
    )
}