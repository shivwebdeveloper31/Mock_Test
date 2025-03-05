import PropTypes from "prop-types";
function QuestionsContainer({
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
          <div className='w-7/12'>
            <h1 className='text-sm font-semibold'>{name}</h1>
          </div>
          <div className='flex w-4/12 justify-around'>
            <div className='mx-2'>
              <p className='text-sm'>Marks</p>
            </div>
            <div className='mx-2 flex'>
              <span className='text-sm mx-1 font-semibold'>Time </span>
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

QuestionsContainer.propTypes = {
  id: PropTypes.number.isRequired, // Ensures 'id' is required
  name: PropTypes.string.isRequired, // Ensures 'name' is required
  questionText: PropTypes.string, // Can be null, so not required
  questionImg: PropTypes.string, // Should be a string, not an array
  optionsText: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures it's an array of strings
  optionImgs: PropTypes.arrayOf(PropTypes.string), // Ensures it's an array of strings (image URLs)
  value: PropTypes.string.isRequired, // Selected option should be a string
  setValue: PropTypes.func.isRequired, // Function to update selected option
};

export default QuestionsContainer;
