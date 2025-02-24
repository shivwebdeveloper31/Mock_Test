import React, { useEffect, useState } from "react";
import logo from "../Img/perfect_rank.png";
import CountDown from "../Components/CountDown";
import TestResult from "../Components/TestResult";
import QuestionsContainer from "../Components/QuestionsContainer";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handelQuestionsData } from "../ReduxSlice/questionDataSlice";

export default function PerfectRank() {
  const [questionNum, setQuestionNum] = useState(0);
  const dataStore = useSelector((store) => store.questionsData);
  const [myData, setMyData] = useState([]);
  // const dispatch = useDispatch();
  // const getDataStore = useSelector((store) => store.questionsData);

  const nextQuestion = () => {
    const allQuestions = myData.length;
    if (questionNum <= allQuestions) {
      console.log(questionNum, allQuestions, "question");
      setQuestionNum(questionNum + 1);
    } else {
      <p>End</p>;
    }
  };
  const getData = async () => {
    const jsonData = await fetch(
      "https://mediumvioletred-jackal-642138.hostingersite.com/wp-json/wp/v2/posts"
    );
    const data = await jsonData.json();
    setMyData(data);
    console.log(data, "data");

    // dispatch(handelQuestionsData(data));
  };

  useEffect(() => {
    getData();
  }, []);
  const mainData = [...dataStore.data, ...myData];
  console.log(mainData, "data");

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
            content={myData[questionNum]?.content?.rendered}
            id={myData[questionNum]?.id}
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
            <TestResult data={myData} />
          </div>
        </div>
      </div>
      <div className='w-9/12 flex justify-between px-4  '>
        <div className=' '>
          <button className='cursor-pointer bg-[#5d4debfe]  px-3 py-2 mr-2  rounded-lg  text-sm w-48 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'>
            Mark for Review & Next
          </button>
          <button className='cursor-pointer bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'>
            Clear Response
          </button>
        </div>
        <button
          className='cursor-pointer  bg-[#5d4debfe] px-3 py-2 mr-2 rounded-lg  text-sm w-36 hover:bg-[#4c3fbcfe] transition-all duration-500 ease-in-out  text-white'
          onClick={() => nextQuestion()}>
          Save & Next
        </button>
      </div>
    </div>
  );
}
