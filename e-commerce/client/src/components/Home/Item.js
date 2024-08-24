import React from "react";


export default function Item()
{
    return (
        <div className="flex flex-col items-center relative min-h-10 w-[300px] h-[300px]">
            <img className="object-cover w-full h-full" src="https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6" />
            <div className="absolute flex flex-col gap-10 p-5 h-full text-center text-[#F0EBD8]">
                <h1 className="rounded bg-[#748CAB] ">Name</h1>
                <p className="p-1 rounded bg-[#748CAB]">Summary</p>
            </div>
            
        </div>
    )
}