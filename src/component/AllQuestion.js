import React from 'react';
import './AllQuestion.css';

const AllQuestion = ({ nameData, nameFunchandleAnswerClick }) => {
  return (
    <div>
      <h2>Question No. {nameData.id}</h2>
      <h2>{nameData.question}</h2>
      <ul>
        {/* //display array option on DataQuesion.js [1,2,3] by map only option */}
        {nameData.option.map((val, index) => (
          <label>
      
          <li onClick={() => nameFunchandleAnswerClick(val)} key={index}>
  
            <input type="radio" />
            {val}
          </li>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default AllQuestion;
