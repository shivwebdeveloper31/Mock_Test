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
          <div className='' key={index}>
            <h1 className='font-semibold text-[#1b2124] py-2 px-2 hover:underline'>
              {h}
            </h1>
            {filterBook.map((bookName, index) => {
              return (
                <div key={index}>
                  <p className='px-2 py-1 text-sm text-[#757575] hover:underline'>
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
