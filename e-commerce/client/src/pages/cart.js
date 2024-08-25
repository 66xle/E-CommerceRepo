import React from 'react';

import DisplayCart from '../components/Cart/DisplayCart';

export default function CreateAccount() {
    return (
        <div className='flex flex-col items-center w-full h-[100%] bg-[#3E5C76]' >
            <DisplayCart/>
            <p className="pb-20 text-3xl text-[#F0EBD8]">Total: $100</p>
            <button className="mb-[300px] p-3 ring-4 rounded text-[#F0EBD8] text-4xl bg-[#1D2D44]">Purchase</button>
        </div>
    )
}