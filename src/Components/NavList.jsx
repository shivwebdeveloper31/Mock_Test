import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BooksList from "./BooksList";
import { data } from "../Constant/Data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavList() {
  const [category, setCategory] = useState(null);
  const navList = data[1].NavList;
  const bookList = data[0];
  const isNavListOpen = useSelector((store) => store.navList.isNavListOpen);

  return (
    <>
      {isNavListOpen && (
        <ul className='lg:sticky md:sticky fixed overflow-y-scroll lg:overflow-visible md:overflow-hidden z-40 bg-white lg:top-20 md:top-20 top-16 border-b-[1px] border-gray-300 shadow-md w-full h-screen lg:h-14 md:h-14 '>
          <div className='lg:flex md:flex cursor-pointer'>
            {navList.map((info, index) => {
              return (
                <NavLink to={info.link} key={index}>
                  <div className='group py-3 hover:border-b-2 hover:border-[#5a4bda] hover:bg-gradient-to-t from-blue-100 to-gray-50'>
                    <li
                      className='mx-2 flex'
                      onMouseEnter={() => setCategory(info.key)}>
                      <span className='font-medium text-[16px] w-full'>
                        {info.name}
                      </span>
                      <span className='mx-2'>
                        {info.dropDown && (
                          <FontAwesomeIcon
                            className='group-hover:rotate-180 transition-all duration-500 ease-in-out size-3'
                            icon={faChevronDown}
                          />
                        )}
                      </span>
                    </li>
                    {info.dropDown && (
                      <div className='flex flex-wrap group-hover:visible absolute invisible  bg-white border lg:top-12 md:top-12  lg:w-1/2 md:w-1/2 w-8/12  lg:px-10 md:px-10 lg:py-4 md:py-4'>
                        <BooksList booksList={bookList} keyName={category} />
                      </div>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </ul>
      )}
    </>
  );
}

export default NavList;
