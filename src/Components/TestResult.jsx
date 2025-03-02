import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function TestResult({ data, answeredStatus }) {
  return (
    <>
      <div className='bg-[#9288effe] '>
        <div className='flex items-center border-b-[1px] border-gray-500 py-2  px-4'>
          <FontAwesomeIcon icon={faCircleUser} className='mx-2 size-5' />
          <p>Shradhanand Patil</p>
        </div>
        <div className='flex flex-wrap justify-between p-2 border-b-[1px] border-gray-500'>
          <div>
            <p className='text-xs mx-2 my-1'>Answered</p>
          </div>
          <div>
            <p className='text-xs mx-2 my-1'>Marked</p>
          </div>
          <div>
            <p className='text-xs mx-2 my-1'>Not Visited</p>
          </div>
          <div>
            <p className='text-xs mx-2 my-1'>Marked and answered</p>
          </div>
          <div>
            <p className='text-xs mx-2 my-1'>Not Answered</p>
          </div>
        </div>
        <div>
          <div className='bg-[#5d4debfe] flex px-4 py-2 items-center mt-8 mb-5 '>
            <h1 className='mr-2 text-sm font-semibold'>SECTION</h1>{" "}
            <span className='text-xs'>General Awareness</span>
          </div>
          <div className='grid grid-cols-5 h-40 px-4 border-b-[1px] border-gray-500'>
            {data.map((info, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center ${
                  answeredStatus[i] == 1
                    ? "bg-red-500 rounded-full"
                    : answeredStatus[i] == 2
                    ? "bg-green-500 rounded-t-full"
                    : answeredStatus[i] == 3
                    ? "bg-purple-500 rounded-l-xl rounded-r-xl w-10"
                    : "bg-white"
                }`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className='px-4 py-2'>
          <div className='flex '>
            <button className='bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out '>
              Question Paper
            </button>
            <button className='bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out'>
              Instred
            </button>
          </div>
          <button className='bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg text-white text-sm  w-full mt-2 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out'>
            Submit Test
          </button>
        </div>
      </div>
    </>
  );
}

export default TestResult;
