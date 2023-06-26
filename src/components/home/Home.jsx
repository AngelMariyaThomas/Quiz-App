import React from 'react'
import './Home.scss'
import { QuestionState } from '../context/Context'
import { useQuiz } from '../../hooks/Hooks'

const Home = () => {
  const { QuestionArray } = QuestionState()
  const {
    index,
    score,
    color,
    disabled,
    selected,
    handleClick,
    next,
    getCurrentQuestion,
    isQuizOver
  } = useQuiz(QuestionArray)

  return (
    isQuizOver() ? (
      <div className='card'>
        <div className='score-container'>
          <h1 style={{ color: "red", fontSize: "50px" }}>Game Over</h1>
          {score < QuestionArray.length - 1 ? (
            <>
              <h3>Try Again..!</h3>
              <span>Your score: {score}/5</span>
            </>
          ) : (
            <>
              <h3>Well played!</h3>
              <span>Your score: {score}/5</span>
            </>
          )}
        </div>
      </div>
    ) : (
      <div className='container'>
        <h1>QUIZ APP</h1>
        <div className='card'>
          {[getCurrentQuestion()].map((item) => (
            <div key={item.question}>
              <h5 style={{ marginTop: "0", color: "white" }}>Question NO : {index + 1}/5</h5>
              {item.question}
              <ul>
                {item.options.map((prod, key) => (
                  <div key={key}>
                    <button
                      onClick={() => handleClick(prod, item.answer, key)}
                      className={prod === item.answer ? (color ? "correct" : "") : selected === key ? "wrong" : ""}
                      disabled={disabled}
                    >
                      {prod}
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          ))}
          <button className='next' onClick={next}>Next&gt;&gt;</button>
        </div>
        <p>Score: {score}/5</p>
      </div>
    )
  )
}

export default Home
