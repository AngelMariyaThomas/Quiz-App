import React, { useState } from 'react'
import './Home.scss'
import { QuestionState } from '../context/Context'
import { useQuiz } from '../../hooks/Hooks'
import { Modal, Button } from 'react-bootstrap'


const Home = () => {
  const { QuestionArray } = QuestionState()
  var {
    index,
    score,
    show,
    color,
    disabled,
    selected,
    handleClose,
    handleClick,
    next,
    getCurrentQuestion,
    isQuizOver
  } = useQuiz(QuestionArray)
  const [click,setClick] = useState(true)
  const clickedft = ()=>{
    setClick(false)
  }
 

  return (
    isQuizOver() ? (
      <div className='card'>
        <div className='score-container'>
          <h1 style={{ color: "red", fontSize: "50px" }}>Game Over</h1>
          {score < QuestionArray.length - 1 ? (
            <>
              <h3>Try Again..!</h3>
              <span>Your score: {score}/15</span>
            </>
          ) : (
            <>
              <h3>Well played!</h3>
              <span>Your score: {score}/15</span>
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
          
              {item.question}
              <br/><br/>
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
          <button className='next' onClick={next}>Next&gt;&gt;

          </button>


        </div>
        <p>Score: {score}/15</p>
        {console.log(show, score, index)}

        {score== 5 ? (<Modal show={click} onHide={clickedft}

          
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Button style={{backgroundColor: "yellow" ,color:"black" ,width:"60px", height:"40px"}}onClick={clickedft}>claim</Button>
            <img  style= {{width:'70px',height:'80px'}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyeAywJ8n5-r54CijFOm4jmUOi40w0Y7TOA&usqp=CAU'/>
            <Modal.Title id="contained-modal-title-vcenter">
              5 Points 
              BONUS!
            </Modal.Title>
          </Modal.Header>
       

        </Modal>) : ("")}

      </div>

    )
  )

}

export default Home
