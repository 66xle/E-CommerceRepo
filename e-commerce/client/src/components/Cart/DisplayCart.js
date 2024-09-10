import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import { selectCart } from "../../slices/cartSlice";





export default function DisplayCart()
{
    
    const cartItems = useSelector(selectCart);

    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        
    }, [refresh]);


    return (
        <div className='flex flex-col items-center gap-10 my-[150px] p-5 w-[600px] min-h-[700px] bg-[#748CAB]'>
                <h1 className="text-3xl text-center text-[#F0EBD8]">Cart</h1>
                <div className=" flex flex-col items-center gap-5 w-full h-full">
                        {
                            cartItems.map(item => <CartItem key={item.id} item={item} setRefresh={setRefresh} />)
                        }
                </div>
        </div>
    )
}


