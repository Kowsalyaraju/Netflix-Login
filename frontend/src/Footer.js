import { Link } from "react-router-dom"

function Footer()
{
    return(
        <div className="w-full border-t border-black/50 mt-20 px-10 py-8 bg-transparent ">

            <div className="flex flex-col md:flex-row justify-between items-center">

                {/* Left Side */}
                <div>
                    <h1 className="text-red-600 text-3xl font-bold">
                        NETFLIX
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Unlimited movies, TV shows and more.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex gap-8 mt-5 md:mt-0">

                    <Link to={"/"} className="text-md md:text-md text-white font-bold">Home</Link>
                    <Link to={"/dashboard"} className="text-md md:text-md text-white font-bold">Dashboard</Link>

                </div>

            </div>

            {/* Bottom Text */}
            <div className="text-center text-gray-500 mt-8 text-sm">
                © 2026 Netflix Clone. All Rights Reserved.
            </div>

        </div>
    )
}

export default Footer