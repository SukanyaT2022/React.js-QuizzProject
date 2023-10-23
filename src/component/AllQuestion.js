import React, { useState } from 'react';
import './AllQuestion.css';


const AllQuestion = ({ nameData, nameFunchandleAnswerClick, nameHandleNextClick }) => {
  const [resetSelectedOption, setResetSelectedOption] = useState(null)
  
  const handleResetOption =(e)=>{
setResetSelectedOption(e.target.value)
  }

  //evrey time when click next button this function will work
  const handleNextButton =()=>{
    setResetSelectedOption(null) // it reset radio batton everytime when click next button
    nameHandleNextClick(resetSelectedOption) //nameHandleNextClick set question function from app.js
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
            {/* val is number from multiple choices */}
            {/* // nameFunchandleAnswerClick from app.js  check if it correct and gice score*/}
  
            <input 
            type="radio" 
            value={val} 
            checked={resetSelectedOption === val}  
         //line 32 when user click it tick only one radion button that tick--checked means tick when user tick
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
