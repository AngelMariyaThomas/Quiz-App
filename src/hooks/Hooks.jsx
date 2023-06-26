
import { useState } from 'react';

export const useQuiz = (QuestionArray) => {
  const [state, setState] = useState({
    index: 0,
    score: 0,
    color: false,
    disabled: false,
    selected: null,
    show:false

  });

  const handleClick = (prod, answer, key) => {
    if (prod === answer) {
      setState(prevState => ({
        ...prevState,
        score: prevState.score + 1,
        selected: null,
        color: true,
        disabled: true
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        selected: key,
        color: false,
        disabled: true
      }));
    }
  };

  const next = () => {
    setState(prevState => {
      const updatedIndex = prevState.index + 1;
      let updatedScore = prevState.score;
      
      if (updatedIndex ===5) {
    
        updatedScore +=5; 
      }
      
      return {
        ...prevState,

        disabled: false,
        selected: null,
        index: updatedIndex,
        score: updatedScore
      };
    });
  };
  
  const handleClose=()=>{
    setState((prevState)=>({
      ...prevState,
      show:true,
      score:prevState.score+5,
    
    }))
  }

  const { index, score, color, disabled, selected } = state;

  const getCurrentQuestion = () => QuestionArray[index];
  const isQuizOver = () => index > QuestionArray.length - 1;

  return {
    score,
    color,
    disabled,
    selected,
    handleClose,
    handleClick,
    next,
    getCurrentQuestion,
    isQuizOver
  };
};


