import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

import {loadGameDatabase} from '../slices/gameSlice';
import { useDispatch } from 'react-redux';

function Root() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGameDatabase());
    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}


export default Root;