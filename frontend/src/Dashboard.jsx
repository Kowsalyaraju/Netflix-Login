import Shinchan from "./assets/images/Shinchan welcome.png"

import Navbar from "./Navbar"
import Footer from "./Footer"

function Dashboard()
{
    return(
        <div className="w-full h-full object-cover bg-[linear-gradient(to_bottom,#4b0000,#1a0000,#000000)]">

          <Navbar className="bg-black"/>

            <img
                src={Shinchan}
                alt="Shinchan"
                className="w-full h-full object-cover"
            />
        <Footer/>
        </div>
    )
}

export default Dashboard