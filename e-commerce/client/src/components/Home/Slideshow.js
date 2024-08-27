import React from "react";




export default function Slideshow()
{
    return (
        <div className="flex justify-center items-center w-full h-[36rem]">
            <div className="relative h-full w-full bg-no-repeat bg-center bg-cover bg-[url('https://i.pinimg.com/originals/d6/fa/0d/d6fa0d8a8272daf74c67b3293eecac88.png')]"></div>
            <button className="absolute mt-20 p-2 ring-4 rounded text-[#F0EBD8] text-4xl bg-[#3E5C76]">View Game</button>
        </div>
    )
}