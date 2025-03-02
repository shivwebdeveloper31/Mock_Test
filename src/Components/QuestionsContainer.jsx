import React, { useState } from "react";

function QuestionsContainer({
  id,
  name,
  questionText,
  questionImg,
  optionsText,
  optionImgs,
  value,
  setValue,
}) {
  const handelOption = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className='py-2'>
        <div className='flex shadow-sm py-2 px-4  w-full items-center'>
          <div className='w-8/12'>
            <h1 className='text-sm font-semibold'>{name} </h1>
          </div>
          <div className='flex w-4/12 justify-around'>
            <div className='mx-2'>
              <p className='text-sm'>Marks</p>
            </div>
            <div className='mx-2'>
              <p className='text-sm'>Time </p>
            </div>
            <div className='mx-2'>
              <label className='text-sm' htmlFor='lang'>
                View In :
              </label>
              <select
                className='outline-none border-2 text-sm text-gray-400'
                name='lang'
                id='lang'>
                <option value='English'>English</option>
                <option value='Hindi'>Hindi</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-5 px-4 '>
          <div className=''>
            <h2 className='text-lg font-semibold mb-4'>
              {questionText || <img src={questionImg} alt='img' />}
            </h2>
            <ul className='space-y-2 '>
              {optionImgs.length == 0
                ? optionsText.map((option, index) => {
                    return (
                      <div key={index}>
                        <input
                          type='radio'
                          name='option'
                          id={option}
                          value={option}
                          checked={option == value}
                          onChange={handelOption}
                        />
                        <label className='mx-2' htmlFor='option'>
                          {option}
                        </label>
                      </div>
                    );
                  })
                : optionImgs.map((option, index) => {
                    return (
                      <div key={index} className='flex  w-full h-10'>
                        <input
                          type='radio'
                          name='option'
                          id={option}
                          value={option}
                          onChange={handelOption}
                        />
                        <img className='w-fit ml-2' src={option} alt='option' />
                      </div>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionsContainer;
