import { Clapperboard, Heart, House } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router'
import SearchComponent from './Search'

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
                <div className="ml-auto items-center flex gap-4">
                    <Link to="/" className={(location.pathname === '/' ? 'text-red-500' : 'text-white')}>
                        <House />
                    </Link>
                    <Link to="/favorite" className={(location.pathname == '/favorite' ? "text-red-500" : "text-white")}><Heart />
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar