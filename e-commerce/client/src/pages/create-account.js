import React, {useState} from 'react';

async function Register(username, password, verifyPassword) {
    try {
        const response = await fetch("http://localhost:2000/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                verifyPassword: verifyPassword
            })
        });

        if (response.redirected) {
            window.location.href= "./sign-in";
        }

        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err);
    }
}


export default function CreateAccount() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    return (
        <div className='flex justify-center items-center w-full h-[100vh] bg-[#3E5C76]' >
            <div className='flex flex-col items-center gap-[3.5rem] p-10 w-[500px] h-[700px] bg-[#748CAB]'>
                <h1 className="text-3xl text-[#F0EBD8]">Create Account</h1>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Username' required/>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Password' required/>
                <input className='p-3 w-[60%] h-[10%] text-xl rounded' onChange={(event) => setVerifyPassword(event.target.value)} type="password" placeholder='Verify Password' required/>
                <button className="p-3 ring-4 rounded text-[#F0EBD8] text-3xl bg-[#1D2D44]" onClick={() => Register(username, password, verifyPassword)} >Create Account</button>
                <a href="./sign-in" className="text-xl text-[#F0EBD8]">Log in</a>
                {/* <p className="absolute mt-[400px]">Password does not match</p> */}
            </div>
        </div>
    )
}