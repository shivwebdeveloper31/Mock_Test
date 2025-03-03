import React, { useEffect, useState } from "react";
import logo from "../Img/perfect_rank.png";
import CountDown from "../Components/CountDown";
import TestResult from "../Components/TestResult";
import QuestionsContainer from "../Components/QuestionsContainer";
import { NavLink } from "react-router-dom";

export default function PerfectRank() {
  const [questionNum, setQuestionNum] = useState(0);
  const [givenAns, setGivenAns] = useState(" ");
  const [myData, setMyData] = useState([]);
  const [answeredStatus, setAnsweredStatus] = useState(
    Array(myData?.length).fill(0)
  );

  const handelAnswer = () => {
    const newStatus = [...answeredStatus];
    if (givenAns == " ") {
      newStatus[questionNum] = 1;
    } else {
      newStatus[questionNum] = 2;
      // Mark question as answered
    }
    setAnsweredStatus(newStatus);
  };

  const handelReview = () => {
    const newStatus = [...answeredStatus];
    console.log(givenAns, "ans");

    if (givenAns == " ") {
      newStatus[questionNum] = 3;
    } else {
      newStatus[questionNum] = 4;
    }
    setAnsweredStatus(newStatus);
    if (questionNum <= myData.length) {
      setQuestionNum(questionNum + 1);
    }
    setGivenAns(" ");
  };

  const saveNextQuestion = () => {
    const allQuestions = myData.length;
    if (questionNum <= allQuestions) {
      setQuestionNum(questionNum + 1);
    } else {
      <p>End</p>;
    }

    setGivenAns(" ");
    handelAnswer();
  };

  const getData = async () => {
    const jsonData = await fetch(
      "https://mediumvioletred-jackal-642138.hostingersite.com/wp-json/wp/v2/posts"
    );
    const data = await jsonData.json();
    setMyData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const extractQuestionAndOptions = (htmlContent) => {
    const tempDiv = document.createElement("div");

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
    extractQuestionAndOptions(myData[questionNum]?.content.rendered);

  return (
    <div className=''>
      <div className='grid grid-flow-col items-center w-full px-10 shadow-md py-1'>
        <NavLink to='/'>
          <div className='col-span-1 flex items-center'>
            <img src={logo} className='size-14' alt='logo' />
            <h1 className='ml-4 text-2xl text-[#5a4bda] font-bold'>
              Perfect Rank
            </h1>
          </div>
        </NavLink>
        <div className='col-span-9 flex'>
          <h1>SSC :</h1> <span className='ml-2'>Mega live test</span>
        </div>
        <div className='flex col-span-1 bg-[#cfcece] px-2 py-2 rounded-lg'>
          <h1 className='mx-2 font-semibold'>Time Left</h1>
          <CountDown time='60' />
        </div>
      </div>
      <div className=' relative z-20'>
        <div className='absolute top-10 w-9/12 '>
          <QuestionsContainer
            name={myData[questionNum]?.title?.rendered}
            questionText={questionText}
            questionImg={questionImg}
            optionsText={optionsText}
            optionImgs={optionImgs}
            id={myData[questionNum]?.id}
            value={givenAns}
            setValue={setGivenAns}
          />
        </div>
        <div className='flex w-full '>
          <div className='flex items-center h-10 px-4  bg-gray-100 w-9/12 '>
            <p className='mr-10'>SECTIONS</p>
            <button className='mx-2 text-sm  cursor-pointer py-1 px-1 focus:bg-[#5a4bda] focus:text-white hover:bg-[#5a4bda] hover:text-white rounded-md'>
              General Awareness
            </button>
            <button className='mx-2 text-sm  cursor-pointer py-1 px-1 focus:bg-[#5a4bda] focus:text-white hover:bg-[#5a4bda] hover:text-white rounded-md'>
              General Awareness
            </button>
            <button className='mx-2 text-sm  cursor-pointer py-1 px-1 focus:bg-[#5a4bda] focus:text-white hover:bg-[#5a4bda] hover:text-white rounded-md'>
              General Awareness
            </button>
            <button className='mx-2 text-sm  cursor-pointer py-1 px-1 focus:bg-[#5a4bda] focus:text-white hover:bg-[#5a4bda] hover:text-white rounded-md'>
              General Awareness
            </button>
          </div>
          <div className='w-3/12 '>
            <TestResult data={myData} answeredStatus={answeredStatus} />
          </div>
        </div>
      </div>
      <div className='w-9/12 flex justify-between px-4  '>
        <div className=' '>
          <button
            onClick={handelReview}
            className='cursor-pointer bg-[#5d4debfe]  px-3 py-2 mr-2  rounded-lg  text-sm w-48 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'>
            Mark for Review & Next
          </button>
          <button
            onClick={() => setGivenAns(" ")}
            className='cursor-pointer bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'>
            Clear Response
          </button>
        </div>
        <button
          className='cursor-pointer  bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'
          onClick={() => saveNextQuestion()}>
          Save & Next
        </button>
      </div>
    </div>
  );
}
