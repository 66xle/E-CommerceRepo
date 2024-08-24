import React from 'react';


function SignIn() {
    return (
        <div className='flex justify-center items-center w-full h-[100vh] bg-[#3E5C76]' >
            <div className='flex flex-col items-center gap-20 p-10 w-[500px] h-[700px] bg-[#748CAB]'>
                <h1 className="text-3xl text-[#F0EBD8]">Sign In</h1>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' type="text" placeholder='Username' required/>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' type="password" placeholder='Password' required/>
                <button className="p-3 ring-4 rounded text-[#F0EBD8] text-4xl bg-[#1D2D44]">Log In</button>
                <a className="text-xl text-[#F0EBD8]">Create account</a>
            </div>
        </div>
    )
}


export default SignIn;