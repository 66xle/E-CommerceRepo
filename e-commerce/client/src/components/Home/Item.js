import React from "react";


export default function Item({item})
{
    return (
        <div className="flex flex-col items-center relative min-h-10 w-[300px] h-[300px]">
            <img className="object-cover w-full h-full" src={item.image} />
            <div className="absolute flex flex-col gap-[150px] p-5 h-full items-center text-center text-[#F0EBD8]">
                <h1 className="p-1 rounded bg-[#748CAB] ">{item.name}</h1>
                <a href={`/game/${item.id}`} className="p-1 rounded bg-[#748CAB]">View Game</a>
            </div>
            
        </div>
    )
}