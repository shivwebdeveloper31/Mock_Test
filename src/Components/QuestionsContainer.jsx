import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestionId, handelIsAnsGet } from "../ReduxSlice/ansSlice";
import { handelQuestionsData } from "../ReduxSlice/questionDataSlice";

function QuestionsContainer({ id, name, content }) {
  const [givenAns, setGiveAns] = useState("");
  const dispatch = useDispatch();
  const extractQuestionAndOptions = (htmlContent) => {
    const tempDiv = document.createElement("div");
    console.log(tempDiv, "div");

    tempDiv.innerHTML = htmlContent;
    // Extract question
    const questionElement = tempDiv.querySelector("p strong");

    const questionText = questionElement
      ? questionElement.parentElement.nextElementSibling.textContent.trim()
      : "No question found.";

    const imgElement = tempDiv.querySelector("p img");

    const questionImg = imgElement ? imgElement.src : "No Qution Found";

    // Extract options
    let optionsElements = tempDiv.querySelectorAll("p + ul li");
    let optionsText = [];
    optionsElements.forEach((li) => {
      optionsText.push(li.textContent.trim());
    });

    const optionsImg = tempDiv.querySelectorAll("p img");
    const optionImgs = [];

    optionsImg.forEach((img) => {
      optionImgs.push(img?.src);
    });

    return {
      questionText,
      questionImg,
      optionsText,
      optionImgs,
    };
  };

  const { questionText, questionImg, optionsText, optionImgs } =
    extractQuestionAndOptions(content);

  const handelOption = (e) => {
    setGiveAns(e.target.value);
    dispatch(
      handelQuestionsData({ id: id, ans: e.target.value, isAnsGet: true })
    );
    dispatch(getQuestionId(id));
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
                          onClick={handelOption}
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
                          onClick={(e) => e.target.value}
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
