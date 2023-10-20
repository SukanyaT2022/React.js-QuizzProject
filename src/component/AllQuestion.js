import React, { useState } from 'react';
import './AllQuestion.css';


const AllQuestion = ({ nameData, nameFunchandleAnswerClick, nameHandleNextClick }) => {
  const [resetSelectedOption, setResetSelectedOption] = useState(null)
  
  const handleResetOption =(e)=>{
setResetSelectedOption(e.target.value)
  }

  const handleNextButton =()=>{
    setResetSelectedOption(null)
    nameHandleNextClick(resetSelectedOption)
  }
  return (
    <div>
      <h2>Question No. {nameData.id}</h2>
      <h2>{nameData.question}</h2>
      <ul>
        {/* //display array option on DataQuesion.js [1,2,3] by map only option */}
        {nameData.option.map((val, index) => (
          <label>
      
          <li onClick={() => nameFunchandleAnswerClick(val)} key={index}>
  
            <input 
            type="radio" 
            value={val} 
            checked={resetSelectedOption === val}  
            onChange={handleResetOption}/>
            {val}
          </li>
          </label>
        ))}
      </ul>

    <button onClick={handleNextButton}>Next</button>
    </div>
  );
};

export default AllQuestion;
