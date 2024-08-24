
import React from "react";



export default function Navbar()
{
    return (
        <div className="w-full h-14 flex flex-row text-[#F0EBD8] bg-[#1D2D44]">
            <p className="mt-3 ml-10" >Games Logo</p>
            <ul className="mt-3 ml-auto flex flex-row gap-2">
                <a href="/home" className="hover:underline">Home</a>
                <a className="hover:underline">test</a>
            </ul>
            <div className="mt-3 ml-auto mr-10 flex flex-row gap-2">
                <a href="/sign-in" className="hover:underline">Sign In</a>
                <a href="/cart" className="hover:underline">Cart</a>
            </div>
        </div>
    )
}