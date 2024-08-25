import React, { useState } from "react";


import CartItem from "./CartItem";

export default function DisplayCart()
{
    // const [items, setItems] = useState([]);

    const item = {value: "test"};

    const items = [item, item, item, item, item, item, item, item, item ]

    return (
        <div className='flex flex-col items-center gap-10 my-[150px] p-5 w-[600px] min-h-[700px] bg-[#748CAB]'>
                <h1 className="text-3xl text-center text-[#F0EBD8]">Cart</h1>
                <div className=" flex flex-col items-center gap-5 w-full h-full">
                        {
                            items.map(() => <CartItem />)
                        }
                </div>
        </div>
    )
}