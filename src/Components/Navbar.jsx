import logo from "../Img/perfect_rank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBox,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handelNavList } from "../ReduxSlice/showNavListSlice";

function Navbar() {
  const dispatch = useDispatch();
  const isNavListOpen = useSelector((store) => store.navList.isNavListOpen);
  return (
    <>
      <div className='grid grid-flow-col z-40 bg-white py-1 lg:py-3 md:py-3 lg:border-b-[1px] md:border-b-[1px] md:border-gray-300 lg:border-gray-300  fixed w-screen  h-15 lg:h-20 md:h-20  items-center'>
        {isNavListOpen ? (
          <FontAwesomeIcon
            className='mx-2  size-5 lg:invisible md:invisible '
            icon={faX}
            onClick={() => dispatch(handelNavList())}
          />
        ) : (
          <FontAwesomeIcon
            className='mx-2  size-5 lg:invisible md:invisible '
            icon={faBars}
            onClick={() => dispatch(handelNavList())}
          />
        )}
        <div className=' items-center flex col-span-3 lg:col-span-1 '>
          <NavLink to='/'>
            <img className='size-16 mx-4' src={logo} alt='website-logo' />
          </NavLink>
        </div>
        <div className='col-span-0 lg:col-span-9 group flex h-12 cursor-pointer invisible lg:visible md:visible'>
          <input
            className='border-[1px] rounded-l-lg px-2 py-3 border-[#5a4bda] w-9/12 outline-none '
            type='text'
            placeholder='Search'
          />
          <div className='border-[1px] border-[#5a4bda]  group-focus-within:bg-[#5a4bda] group-focus-within:text-white px-4 py-3 transition-all duration-500 ease-in-out rounded-r-lg '>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
          </div>
        </div>
        <div className='flex  w-40 justify-evenly lg:col-span-2  text-center'>
          <NavLink to='myOrder'>
            <div className='hover:text-[#757575] cursor-pointer'>
              <FontAwesomeIcon className='size-5  ' icon={faBox} />
              <h1 className='text-[#1b2124] font-medium text-sm hover:text-[#757575]'>
                E-Books
              </h1>
            </div>
          </NavLink>
          <div>
            <input
              className='py-1  px-2 lg:px-5 lg:py-2 bg-[#5a4bda] text-white cursor-pointer rounded-lg hover:bg-[#4437b8] transition-all duration-500 ease-in-out'
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
