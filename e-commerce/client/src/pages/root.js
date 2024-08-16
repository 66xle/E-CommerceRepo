import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div>
            <p>root</p>
            <Outlet />
        </div>
    )
}


export default Root;