import React from 'react'

const Score = ({nameScore, nameDataScore }) => {
  return (
    <div>
     <h1>Completed Quizz.</h1>
     <p>Your score : {nameScore} out of {nameDataScore.length} </p>
    </div>
  )
}

export default Score
