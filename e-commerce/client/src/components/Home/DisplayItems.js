import React, { useState } from "react";


import Item from "./Item";


export default function DisplayItems()
{
    // const [items, setItems] = useState([]);

    const item = {value: "test"};

    const items = [item, item, item, item, item]

    return (
        <div className="flex flex-col items-center bg-[#3E5C76]">
            <h1 className="text-center text-[#F0EBD8] text-3xl m-10" >Games</h1>

            <div className="flex flex-wrap justify-center gap-[100px] w-full h-full">
                {
                    items.map(() => <Item />)
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