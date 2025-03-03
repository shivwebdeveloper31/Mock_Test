import React, { useEffect, useState } from "react";
import logo from "../Img/perfect_rank.png";
import CountDown from "../Components/CountDown";
import TestResult from "../Components/TestResult";
import QuestionsContainer from "../Components/QuestionsContainer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../ReduxSlice/questionDataSlice";

export default function PerfectRank() {
  const [questionNum, setQuestionNum] = useState(0);
  const [givenAns, setGivenAns] = useState(" ");
  const [myData, setMyData] = useState([]);
  const [answeredStatus, setAnsweredStatus] = useState(
    Array(myData?.length).fill(0)
  );
  const [notVisited, setNotVisited] = useState(0);
  const dispatch = useDispatch();

  const handelAnswer = () => {
    // createing a new array as length of the myData and file all as a zero (0)
    // const newStatus = [0,0,0,0,0,0,0]

    const newStatus = [...answeredStatus];
    if (givenAns == " ") {
      newStatus[questionNum] = 1; //if questionNum ==0  then  const newStaus=[1,0,0,0,0,0,0] {1 == not ans}
    } else {
      newStatus[questionNum] = 2; // const newStaus=[2,0,0,0,0,0,0] { 2 == give ans}
    }
    setAnsweredStatus(newStatus);
  };

  const handelReview = () => {
    const newStatus = [...answeredStatus];
    if (givenAns == " ") {
      setNotVisited(notVisited - 1);
      newStatus[questionNum] = 3; // 3 == marked
      dispatch(
        addData({
          id: questionNum,
          arrayName: "marked",
          mainData: givenAns,
        })
      );
    } else {
      setNotVisited(notVisited - 1);
      newStatus[questionNum] = 4; // 4 == marked ans
      dispatch(
        addData({
          id: questionNum,
          arrayName: "markedAnswered",
          mainData: givenAns,
        })
      );
    }
    setAnsweredStatus(newStatus);
    if (questionNum <= myData.length) {
      setQuestionNum(questionNum + 1);
    }
    setGivenAns(" ");
  };

  const saveNextQuestion = () => {
    // for next question
    const allQuestions = myData.length;
    if (questionNum <= allQuestions) {
      setQuestionNum(questionNum + 1);
    } else {
      <p>End</p>;
    }
    setGivenAns(" "); // set option to null
    handelAnswer(); // useing this function we set all answer stauts
    setNotVisited(notVisited - 1);
    // not answered
    if (givenAns == " ") {
      setNotVisited(notVisited - 1);
      dispatch(
        addData({
          id: questionNum,
          arrayName: "notAnswered",
          mainData: givenAns,
        })
      );
    } else {
      setNotVisited(notVisited - 1);
      // answered
      dispatch(
        addData({
          id: questionNum,
          arrayName: "answered",
          mainData: givenAns,
        })
      );
    }
  };

  const getData = async () => {
    const jsonData = await fetch(
      "https://mediumvioletred-jackal-642138.hostingersite.com/wp-json/wp/v2/posts"
    );
    const data = await jsonData.json();
    setMyData(data);
    setNotVisited(data.length);
  };

  useEffect(() => {
    getData();
  }, []);

  const extractQuestionAndOptions = (htmlContent) => {
    const tempDiv = document.createElement("div");
    console.log(tempDiv);

    tempDiv.innerHTML = htmlContent;
    // Extract question Text
    const questionElement = tempDiv.querySelector("p strong");

    const questionText = questionElement
      ? questionElement.parentElement.nextElementSibling.textContent.trim()
      : "No question found.";

    // Extract question img
    const imgElement = tempDiv.querySelector("img");
    const questionImg = imgElement ? imgElement.src : "No Qution Found";

    // Extract options Text
    let optionsElements = tempDiv.querySelectorAll("p + ul li");
    let optionsText = [];

    optionsElements.forEach((li) => {
      optionsText.push(li.textContent.trim());
    });
    // Extract options Img
    const optionsImg = tempDiv.querySelectorAll("strong img");
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
            <TestResult
              data={myData}
              answeredStatus={answeredStatus}
              notVisited={notVisited}
            />
          </div>
        </div>
      </div>
      <div className='w-9/12 flex justify-between px-4  '>
        <div className=' mb-2'>
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
          className='cursor-pointer mb-2  bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'
          onClick={() => saveNextQuestion()}>
          Save & Next
        </button>
      </div>
    </div>
  );
}
