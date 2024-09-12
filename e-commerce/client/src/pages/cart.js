import React from 'react';
import { useSelector } from 'react-redux';

import DisplayCart from '../components/Cart/DisplayCart';
import { selectCart } from '../slices/cartSlice';


function GetTotalPrice(cartItems) {
    
    let total = 0;
    
    cartItems.map(item => {
        total += item.price;
    })

    return total;
}

export default function Cart() {

    const cartItems = useSelector(selectCart);

    return (
        <div className='flex flex-col items-center w-full h-[100%] bg-[#3E5C76]' >
            <DisplayCart/>
            <p className="pb-20 text-3xl text-[#F0EBD8]">Total: ${GetTotalPrice(cartItems)}</p>
            <button className="mb-[300px] p-3 ring-4 rounded text-[#F0EBD8] text-4xl bg-[#1D2D44]">Purchase</button>
        </div>
    )
}