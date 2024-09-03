import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectGame } from "../../slices/gameSlice";

import Item from "./Item";


export default function DisplayItems()
{
    const games = useSelector(selectGame);

    return (
        <div className="flex flex-col items-center bg-[#3E5C76]">
            <h1 className="text-center text-[#F0EBD8] text-3xl m-10" >Games</h1>

            <div className="flex flex-wrap justify-center gap-[100px] w-full h-full">
                {
                    games.map((item) => <Item key={item.id} item={item} />)
                }
                <div className="w-[300px] h-[300px]"></div>
                <div className="w-[300px] h-[300px]"></div>
                <div className="w-[300px] h-[300px]"></div>
                <div className="w-[300px] h-[300px]"></div>
                <div className="w-[300px] h-[300px]"></div>
                <div className="w-[300px] h-[300px]"></div>
            </div>
        </div>
        
    )
}