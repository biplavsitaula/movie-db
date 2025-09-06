import { Clapperboard, Heart, HeartIcon, House, HouseIcon, } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router'

function Navbar() {
    const location = useLocation()

    return (
        <nav className="w-full fixed top-0 bg-black z-50">
            <div className="flex items-center container p-4 mx-auto">
                <h1 className="md:block hidden text-white text-2xl font-bold">
                    <Link to='/'>Movie App</Link>
                </h1>
                <Link to='/' >
                    <Clapperboard className='block md:hidden' />
                </Link>
                <div className="ml-auto text-white items-center flex gap-4">
                    <Link to="/" > <House className={location.pathname == '/' && 'text-red-500'} />
                    </Link>
                    <Link to="/favorites" ><Heart className={location.pathname == '/favorites' && 'text-red-500'} />
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar