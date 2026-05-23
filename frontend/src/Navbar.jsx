import { Link } from "react-router-dom"

function Navbar()
{
    return(

        <div className=" w-full flex flex-row items-center justify-between p-6 bg-transparent border-b border-black">

            <div>
                <h1 className="text-red-700 text-2xl font-bold md:text-4xl">
                    NETFLIX
                </h1>
            </div>

            <div className="flex flex-row gap-5">

                <Link
                    to={"/"}
                    className="text-md md:text-xl text-white font-bold"
                >
                    Home
                </Link>

                <Link
                    to={"/dashboard"}
                    className="text-md md:text-xl text-white font-bold"
                >
                    Dashboard
                </Link>

            </div>

        </div>
    )
}

export default Navbar