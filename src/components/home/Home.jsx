import React from 'react'
import './Home.scss'
import { QuestionState } from '../context/Context'
import { useState } from 'react'




const Home = () => {
  const { QuestionArray } = QuestionState()
  console.log(QuestionArray)

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [color, setColor] = useState(false)
  const[disabled,setDisabled]=useState(0)



  const handleCrct = () => {
    setScore(score + 1)
    setColor(true)
    setDisabled(true)
  }
  const handleWrong = () => {
    setScore(score)
    setColor(false)
    setDisabled(true)
  }
  const next=()=>{
    setDisabled(0)
    setIndex(index + 1)
  }
  return (
    index <= QuestionArray.length - 1 ?


      (<div className='container'>
        <h1>QUIZ APP</h1>
        <div className='card'>


          {QuestionArray.slice(index, index + 1).map((item) => {
            return <div>
                   <h5 style={{marginTop:"0",color:"white"}}>Question NO : {index+1}/5</h5>

              {item.question}
              

              <ul>
                {item.options.map((prod) => {
                  return (
                    <div>
                      {prod==item.answer ?(<><button onClick={()=>handleCrct()} className='answers answer-correct' disabled={disabled} >{prod}</button></>):(<>
                      <button onClick={()=>handleWrong()} className='answers answer-wrong' disabled={disabled}>{prod}</button></>)}
                      
                    
                    </div>
                  )
                })}
              </ul>

            </div>

          })}

          <button className='next'  onClick={() =>{next()}}>Next>></button>

        </div>
        <p>Score:{score}/5</p>
   


      </div>)
      : (
        <div className='card'>
      <div className='score-container'>
        <h1 style={{color:"red",fontSize:"50px"}}>Game Over</h1>
        {score<QuestionArray.length-1?(
          <>
          <h3>Try Again..!</h3>
          <span>
            Your score : {score}/5
          </span>
          </>
      
        ):(<>
        <h3>Well played!</h3>
        <span>Your score : {score}/5</span>
        </>)}

      </div>
        </div>
       
      )
  )
}

export default Home