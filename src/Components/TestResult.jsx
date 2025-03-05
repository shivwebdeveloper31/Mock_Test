import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function TestResult({ data, answeredStatus, notVisited }) {
  const answered = useSelector((store) => store.data.answered);
  const notAnswered = useSelector((store) => store.data.notAnswered);
  const marked = useSelector((store) => store.data.marked);
  const markedAnswered = useSelector((store) => store.data.markedAnswered);

  return (
    <>
      <div className='bg-[#9288effe] '>
        <div className='flex items-center border-b-[1px] border-gray-500 py-2  px-4'>
          <FontAwesomeIcon icon={faCircleUser} className='mx-2 size-5' />
          <p>Shradhanand Patil</p>
        </div>
        <div className='flex flex-wrap justify-between p-2 border-b-[1px] border-gray-500'>
          <div className='flex items-center my-1'>
            <button className='px-2   bg-green-500 rounded-t-full text-white text-[13px]'>
              {answered ? answered.length : 0}
            </button>
            <p className='text-xs mx-2 my-1'>Answered</p>
          </div>
          <div className='flex items-center my-1'>
            <button className='bg-purple-500 px-2 rounded-lg text-white text-[13px]'>
              {marked ? marked.length : 0}
            </button>
            <p className='text-xs mx-2 my-1'>Marked</p>
          </div>
          <div className='flex items-center my-1'>
            <button className='px-2 bg-white text-[13px]'>
              {notVisited ? notVisited : 0}
            </button>
            <p className='text-xs mx-2 my-1'>Not Visited</p>
          </div>
          <div className='flex items-center my-1 relative'>
            <button className='bg-purple-500 px-2 rounded-lg text-white text-[13px]'>
              {markedAnswered ? markedAnswered.length : 0}
            </button>
            <span className='absolute -top-2 left-2  text-green-600 '>
              <FontAwesomeIcon className='size-5' icon={faCheck} />
            </span>
            <p className='text-xs mx-2 my-1'>Marked and answered</p>
          </div>
          <div className='flex items-center my-1'>
            <button className='bg-red-500 px-2 rounded-b-full text-white text-[13px]'>
              {notAnswered ? notAnswered.length : 0}
            </button>
            <p className='text-xs mx-2 my-1'>Not Answered</p>
          </div>
        </div>
        <div>
          <div className='bg-[#5d4debfe] flex px-4 py-2 items-center mt-8 mb-5 '>
            <h1 className='mr-2 text-sm font-semibold'>SECTION</h1>{" "}
            <span className='text-xs'>General Awareness</span>
          </div>
          <div className='grid grid-cols-5  h-40 px-4 border-b-[1px] border-gray-500'>
            {data.map((info, i) => {
              return (
                <div key={i} className='relative cursor-pointer h-fit'>
                  <p
                    className={`px-1 py-1 mx-1  flex items-center justify-center ${
                      answeredStatus[i] == 1
                        ? "bg-red-500 rounded-b-full text-white"
                        : answeredStatus[i] == 2
                        ? "bg-green-500 rounded-t-full text-white"
                        : answeredStatus[i] == 3
                        ? "bg-purple-500 rounded-l-xl rounded-r-xl w-10 text-white"
                        : answeredStatus[i] == 4
                        ? "bg-purple-500 rounded-l-xl rounded-r-xl w-10 text-white"
                        : "bg-white"
                    }`}>
                    {i + 1}
                  </p>
                  {answeredStatus[i] == 4 ? (
                    <span className='absolute -top-3 left-6  text-green-600 '>
                      <FontAwesomeIcon className='size-8' icon={faCheck} />
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
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

TestResult.propTypes = {
  data: PropTypes.array.isRequired,
  answeredStatus: PropTypes.array.isRequired,
  notVisited: PropTypes.number,
};
export default TestResult;
