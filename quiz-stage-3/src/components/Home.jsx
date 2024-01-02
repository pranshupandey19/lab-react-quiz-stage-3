import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home-container'>
      <div id="home-quiz">
        <h1>Quiz App</h1>
        <Link to={"/quiz"}>
        <button id='button' >Play</button>
        
        </Link>
      </div>
    </div>
  )
}

export default Home