import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BooksList({ booksList, kyeName }) {
  console.log(booksList[kyeName], "booklist");

  const { books = [], heading = [] } = booksList[kyeName] || {};

  return (
    <>
      {heading.map((h, index) => {
        const booksName = h.split(" ")[0];
        const filterBook = books.filter((h) => h.split(" ")[0] === booksName);
        return (
          <div key={index}>
            <div className=' group border flex'>
              <h1 className='font-semibold border text-[#1b2124] py-2 px-2 hover:underline'>
                {h}
              </h1>
              <span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className='group-hover:rotate-180 border py-3'
                />
              </span>
            </div>
            {filterBook.map((bookName, index) => {
              return (
                <div key={index}>
                  <p className='px-2 py-1 text-sm text-[#757575] hover:underline hover:text-[#1b2124]'>
                    {bookName}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default BooksList;
