import React from "react";
import { useSelector } from "react-redux";

function Questions({ index, id }) {
  const myData = useSelector((store) => store.questionsData.data);
  return (
    <>
      <div className='align-middle'>
        {id == myData[0]?.id ? (
          <button className='rounded-t-full text-white  text-sm size-8 bg-green-500 '>
            {index + 1}
          </button>
        ) : (
          <button className='border-1 border-black bg-white  text-sm size-8 font-semibold'>
            {index + 1}
          </button>
        )}
      </div>
    </>
  );
}

export default Questions;
