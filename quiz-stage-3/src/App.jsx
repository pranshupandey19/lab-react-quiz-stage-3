
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import {Route,Routes} from "react-router-dom"
import React, { useState } from 'react'

function App() {

  const [attempted,setAttempted] = useState(0)
  const [correct,setCorrect] = useState(0)
  const [wrong,setWrong] = useState(0)


  return (
    <>
    <Routes>

    <Route path='/' element={<Home/>} />  
     <Route path='/quiz' element={<Quiz 
     attempted={attempted}
     setAttempted ={setAttempted}
     correct={correct}
     setCorrect={setCorrect}
     wrong={wrong}
     setWrong={setWrong}
     />}/> 
     <Route path='/result' element={<Result
     attempted={attempted}
     setAttempted ={setAttempted}
     correct={correct}
     setCorrect={setCorrect}
     wrong={wrong}
     setWrong={setWrong}
     />}/> 

    </Routes>
    </>
  )
}

export default App

