import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';



import { selectGame } from '../slices/gameSlice';
import { addItem } from '../slices/cartSlice';

export default function GameItem() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const games = useSelector(selectGame);

    const selectedItem = games[id - 1];

    const handleAddCartItem = () => {
        dispatch(addItem(selectedItem));
    }

    return (
        <div className='flex justify-center p-10 w-full h-[100vh] bg-[#3E5C76]' >
            <div className='flex flex-row p-5 w-[100%] min-w-[700px] max-w-[1250px] h-[700px] bg-[#748CAB]'>
                <img className="object-cover w-[70%] h-full grow" src={selectedItem.image} />
                <div className='flex flex-col gap-10 p-10 max-w-[30%] text-[#F0EBD8]'>
                    <h1 className="text-3xl font-bold">{selectedItem.name}</h1>
                    <p className="" >{selectedItem.description}</p>
                    <p className="text-2xl" >Cost: ${selectedItem.price}</p>
                    <button className="p-3 ring-4 rounded text-[#F0EBD8] text-2xl bg-[#1D2D44]" onClick={handleAddCartItem}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}