import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BooksList from "./BooksList";
import { data } from "../Constant/Data";

function NavList() {
  const [category, setCategory] = useState(null);
  const navList = data[1].NavList;
  const bookList = data[0];

  return (
    <ul className='fixed top-20 border-b-[1px] border-gray-300 shadow-md w-full  '>
      <div className='flex cursor-pointer'>
        {navList.map((name, index) => {
          return (
            <div
              className='group py-3 hover:border-b-2 hover:border-[#5a4bda] hover:bg-gradient-to-t from-blue-100 to-gray-50 '
              key={index}>
              <li
                className='mx-2 flex'
                onMouseEnter={() => setCategory(name.key)}>
                <span className='font-medium text-[16px] w-full'>
                  {name.name}
                </span>
                <span className='mx-2'>
                  <FontAwesomeIcon
                    className='group-hover:rotate-180 transition-all duration-500 ease-in-out size-3'
                    icon={faChevronDown}
                  />
                </span>
              </li>
              <div className='flex flex-wrap group-hover:visible absolute invisible border-black border top-12 w-1/2  px-10 py-4'>
                <BooksList booksList={bookList} kyeName={category} />
              </div>
            </div>
          );
        })}
      </div>
    </ul>
  );
}

export default NavList;
