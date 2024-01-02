import React, { useState } from 'react'
import questions from "./../../resources/quizQuestion.json"
import { Link } from 'react-router-dom';



const Quiz = (props) => {
  console.log(questions[0]);
  const {attempted , setAttempted ,correct ,setCorrect ,wrong,setWrong} = props
  console.log("attempted: ", attempted);
  console.log("wrong: ", wrong);
  console.log("correct: ", correct);


  const [questionNo,setQuestionNo] = useState(0)
  const [destination, setDestination] = useState(false);

  const handleNext = ()=>{
    if(questionNo<questions.length-1){
      setQuestionNo(questionNo+1)
    }
    else{
      setQuestionNo(questions.length-1)
    }
  }
  const handlePrevious = ()=>{
    if(questionNo>0){

      setQuestionNo(questionNo-1)
    }
    else{
      setQuestionNo(0)
    }
  }

  const confirmQuit = () => {
    const quitConfirmed = window.confirm('Are you sure you want to quit?');
    if (quitConfirmed) {
      setDestination(true);
    }
    else{
      setDestination(false)
    }

  }

  const handleScore = (e) =>{
    if(attempted<questions.length){
      
      setAttempted(attempted+1)
      if(e.target.innerHTML == questions[questionNo].answer){
        alert("correct answer")
        setCorrect(correct+1)
        handleNext()
      }
      else{
        alert("wrong answer")
        setWrong(wrong+1)
        handleNext()
      }
    }
   
  }

  return (
    <div id='quiz-container'>
      <div id="quiz-question-container">
        <div id='quiz-question'>
          Question
        </div>
        <div id="quiz-question-no">
          {questionNo+1} of {questions.length}  
        </div>
        <div id="quiz-questions">
          {questions[questionNo].question}
        </div>

        <div id="quiz-all-options">

        <div id="quiz-options">
          <div id="quiz-opt" onClick={handleScore}>
            {questions[questionNo].optionA}
          </div>
          <div id="quiz-opt" onClick={handleScore}>
          {questions[questionNo].optionB}
          </div>
        </div>

        <div id="quiz-options">
          <div id="quiz-opt" onClick={handleScore}>
          {questions[questionNo].optionC}
          </div>
          <div id="quiz-opt" onClick={handleScore}>
          {questions[questionNo].optionD}
          </div>
        </div>

        </div>
        <div id="quiz-all-buttons">
          <button id='quiz-previous' onClick={handlePrevious}>Previous</button>
          <button id='quiz-next' onClick={handleNext}>Next</button>

          
          <Link onClick={confirmQuit} to={`${destination?"/result":"/quiz"}`} >
          <button id='quiz-quit' >Quit</button>
          </Link>


          <Link to={"/result"}>
          <button id='quiz-finish'>Finish</button>
          </Link>
        </div>
        
      </div>
    </div>
  )

}

export default Quiz




