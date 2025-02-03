import React from "react";
import logo from "../Img/perfect_rank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBox,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='grid grid-flow-col py-3 border-b-[1px] border-gray-300  fixed w-full  h-20'>
        <div className='col-span-1'>
          <NavLink to='/'>
            <img className='size-16 mx-4' src={logo} alt='website-logo' />
          </NavLink>
        </div>
        <div className='col-span-9 group flex h-12 cursor-pointer'>
          <input
            className='border-[1px] rounded-l-lg px-2 py-3 border-[#5a4bda] w-9/12 outline-none '
            type='text'
            placeholder='Search'
          />
          <div className='border-[1px] border-[#5a4bda]  group-focus-within:bg-[#5a4bda] group-focus-within:text-white px-4 py-3 transition-all duration-500 ease-in-out rounded-r-lg '>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
          </div>
        </div>
        <div className='flex justify-evenly col-span-2 text-center'>
          <NavLink to='myOrder'>
            <div className='hover:text-[#757575] cursor-pointer'>
              <FontAwesomeIcon className='size-5  ' icon={faBox} />
              <h1 className='text-[#1b2124] font-medium text-sm hover:text-[#757575]'>
                My Order
              </h1>
            </div>
          </NavLink>
          <div className='hover:text-[#757575] cursor-pointer'>
            <FontAwesomeIcon className='size-5  ' icon={faBagShopping} />
            <h1 className='text-[#1b2124] font-medium text-sm hover:text-[#757575]'>
              My Bag
            </h1>
          </div>
          <div>
            <input
              className='px-5 py-2 bg-[#5a4bda] text-white cursor-pointer rounded-lg hover:bg-[#4437b8] transition-all duration-500 ease-in-out'
              type='button'
              value='Login'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
