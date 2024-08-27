import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

import {loadGameDatabase, hasLoaded} from '../slices/gameSlice';
import { useDispatch, useSelector } from 'react-redux';

function Root() {

    const dispatch = useDispatch();
    const hasLoadedGame = useSelector(hasLoaded);

    if (!hasLoadedGame) {
        dispatch(loadGameDatabase());
    }
    
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}


export default Root;