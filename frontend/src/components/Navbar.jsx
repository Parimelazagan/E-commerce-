import React from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  const visible = []
  return (
    <div className ="flex items-center justify-between py-5 font-medium">
        <img src={assets.logo} className="w-64 cursor-pointer" alt=""/>
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p >HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/Collections' className='flex flex-col items-center gap-1'>
          <p >COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p >ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p >CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

    </ul>
        <div className='flex items-center gap-6'>

          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

          <div className="group relative">

            <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">

                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">

                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p className="cursor-pointer hover:text-black">Orders</p>
                    <p className="cursor-pointer hover:text-black">Logout</p>

                </div>

            </div>

          </div>
            <Link to='/cart' className='relative'> 
              <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
              <div className='absolute -top-2 -right-2 text-xs w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white'>3</div>

            </Link>
            <img src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
        </div>
    
    </div>
  )
} 

export default Navbar
