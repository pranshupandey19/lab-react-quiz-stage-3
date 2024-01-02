import React from 'react'
import { Link } from 'react-router-dom'
import questions from "./../../resources/quizQuestion.json"

const Result = (props) => {

  const {attempted,setAttempted,correct,setCorrect,wrong,setWrong} = props
  const handleReset = ()=>{
    setAttempted(0)
    setCorrect(0)
    setWrong(0)
  }
  return (
    <div id='result-container'>
      <div id='result-result'>Result</div>
      <div id="score-container">
        <div id="result-practice">
          You need more practice!
        </div>
        <div id="result-your-score">
          Your Score is {Math.round((correct/questions.length)*100)}%
        </div>
        <div id="result-all-result">
          <div id="result-category">
            <div id='result-category-text'>Total number of questions</div>
            <div id="result-no">{questions.length}</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of attempted questions</div>
            <div id="result-no">{attempted}</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of correct answers</div>
            <div id="result-no">{correct}</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of wrong answers</div>
            <div id="result-no">{wrong}</div>
          </div>
        </div>
      </div>
      <div id="result-all-buttons">
        <Link to={"/quiz"}>
        <button id='result-play-again' onClick={handleReset}>Play Again</button>
        </Link >
        <Link to={"/"}>
        <button id='result-home'onClick={handleReset} >Back to home</button>
        </Link>
      </div>
    </div>
  )
}

export default Result