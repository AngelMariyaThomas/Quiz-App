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



  const handleCrct = () => {
    setScore(score + 1)
    setColor(true)
  }
  const handleWrong = () => {
    setScore(score)
    setColor(false)
  }
  return (
    index <= QuestionArray.length - 1 ?


      (<div className='container'>
        <h1>QUIZ APP</h1>
        <div className='card'>


          {QuestionArray.slice(index, index + 1).map((item) => {
            return <div>


              {item.question}

              <ul>
                {item.options.map((prod) => {
                  return (
                    <div>
                      <button
                        onClick={prod == item.answer ? () => { handleCrct() } : () => { handleWrong() }}

                        className={color ? "answers answer-correct" : "answer-wrong"}>{prod}</button>

                    </div>
                  )
                })}
              </ul>

            </div>

          })}

          <button className='next' onClick={() => setIndex(index + 1)}>Next>></button>

        </div>
        <p>Score:{score}/5</p>
   


      </div>)
      : (
        <div className='card'>
        <h1 style={{textAlign:'center',color:"white",marginTop:'100px',marginLeft:'10px'}}>Score:{score}/5</h1>
         <p style={{color:'red',fontSize:'40px',textAlign:'center',marginTop:"200px",marginLeft:"6px"}}> GAME OVER!</p>
        </div>
      )
  )
}

export default Home