import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"

function Login()
{
    const navigate = useNavigate()

    const [entemail, setemail] = useState("")
    const [entpass, setpass] = useState("")
    const [error, seterror] = useState("")

    function handleemail(evt)
    {
        setemail(evt.target.value)
    }

    function handlepass(evt)
    {
        setpass(evt.target.value)
    }

    function check()
    {
        if(entemail === "" || entpass === "")
        {
            seterror("All fields are required")
            return
        }

       axios.post("https://netflix-login-qx9c.onrender.com/login",
    {
        email: entemail,
        password: entpass
    }
)

        .then(function(data)
        {
            if(data.data === true)
            {
                navigate("/dashboard")
            }
            else
            {
                seterror("Invalid Email or Password")
            }
        })

        .catch(function(err)
        {
            console.log(err)
            seterror("Something went wrong")
        })
    }

    return(
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#4b0000,#1a0000,#000000)]">

            {/* Navbar */}
            <Navbar/>

            {/* Login Section */}
            <div className="flex flex-col justify-center items-center mt-20 ">

                <h1 className=" text-3xl md:text-5xl text-white font-bold mb-5">
                    Enter your info to sign in
                </h1>

                <p className="text-md md:text-xl text-gray-300 mb-10">
                    Or get started with a new account.
                </p>

                {
                    error &&
                    <p className="bg-red-600 text-white px-5 py-3 rounded mb-5">
                        {error}
                    </p>
                }

                {/* Login Box */}
                <div className="w-[400px]">

                    <input
                        type="email"
                        placeholder="Email"
                        value={entemail}
                        onChange={handleemail}
                        className=" w-full p-4 mb-5 rounded bg-gray-700  text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={entpass}
                        onChange={handlepass}
                        className="w-full p-4 mb-5 rounded bg-gray-700 text-white outline-none"
                    /><br></br>

                    <button
                        onClick={check}
                        className=" w-full p-4 rounded bg-red-600 hover:bg-red-700 text-white font-bold transition"
                    >
                        Sign In
                    </button>

                </div>

            </div>

{/* Footer */}

<Footer/>

        </div>
    )
}

export default Login