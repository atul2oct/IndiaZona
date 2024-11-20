import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Logo from "../Assests/Images/Logo.png";

const Navbar = () => {
    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)] '>
            <div className='flex-col mx-4'>
                <Link to = '/'>
                    <img src={Logo} alt="logo" className="object-contain h-28"/>
                </Link>
                <Sidebar/>

            </div>
            
            <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto border-l-2 border-r-[#E6EDFF]'>
                <>
                    <Outlet/>
                </>
            </div>
        </div>
      )
}

export default Navbar