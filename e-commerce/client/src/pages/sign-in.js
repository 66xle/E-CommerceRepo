import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux'; 

import { errorMessage, setErrorMessage, clearErrorMessage } from '../slices/userSlice';
import { useSelector } from 'react-redux';


async function Login(username, password, dispatch) {
    try {
        const response = await fetch("http://localhost:2000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        console.log(response);

        // if (response.redirected) {
        //     window.location.href= "./sign-in";
        // }

        const json = await response.json();
        console.log(json);

        dispatch(setErrorMessage(json.message));

    } catch (err) {
        console.log(err);
    }
}

function ShowErrorMessage(errorMessage)
{
    if (errorMessage) {
       return (
        <p className='text-xl text-red-600' >{errorMessage}</p>
       )
    }
}

function SignIn() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const errMessage = useSelector(errorMessage);

    useEffect(() => {
        dispatch(clearErrorMessage());
    }, [dispatch]);

    return (
        <div className='flex justify-center items-center w-full h-[100vh] bg-[#3E5C76]' >
            <div className='flex flex-col items-center gap-[60px] p-10 w-[500px] h-[700px] bg-[#748CAB]'>
                <h1 className="text-3xl text-[#F0EBD8]">Sign In</h1>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Username' required/>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Password' required/>
                {ShowErrorMessage(errMessage)}
                <button className="p-3 ring-4 rounded text-[#F0EBD8] text-4xl bg-[#1D2D44]" onClick={() => Login(username, password, dispatch)}>Log In</button>
                <a href="./create-account" className="text-xl text-[#F0EBD8]">Create account</a>
            </div>
        </div>
    )
}


export default SignIn;