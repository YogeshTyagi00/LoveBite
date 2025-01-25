
import React, { useState } from "react";
import "./Question.css";


const questions = [
  "Do you like me?",
  "Do you think I'm funny?",
  "Will you go out with me?",
];

const yes_responses = [
  "Aww, I love you too! 😊",
  "Haha, I'm glad you think so! 😂",
  "Yay! That makes me so happy! 🥰"
]

const Question = () => {
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[click,setclick] = useState(null);
    const[shownext,setshownext] = useState(false);
    
    function handleclick(answer){
        setclick(answer);
        
        if (answer === "yes") {
            setshownext(true); 
          
        } 
        else {
          setshownext(false);
        }
    }

    function handleNextQuestion(){
      setclick(null);
      setshownext(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    

    const isLastQuestion = currentQuestionIndex >= questions.length;


    return (   
      <section id="Question">
          

            {!click&&!isLastQuestion&&(currentQuestionIndex==0)&&(
            <>
            <div className="data">
            <h1>So,here you are</h1>
            <p>{questions[currentQuestionIndex]}</p>
            <div>
            <button className="yes-btn" onClick={()=>handleclick('yes')}>Yes</button>
            <button className="no-btn" onClick={()=>handleclick('no')}>No</button>
            </div>
            </div>
                </>)}

            {!click&&!isLastQuestion&&(currentQuestionIndex>0)&&(
            <>
            <div className="data">
            <p>{questions[currentQuestionIndex]}</p>
            <div>
            <button className="yes-btn" onClick={()=>handleclick('yes')}>Yes</button>
            <button className="no-btn" onClick={()=>handleclick('no')}>No</button>
            </div>
            </div>
                </>)}
    
        <div>  

        {click === 'yes' &&!isLastQuestion&&(
          <div className="response-content">
            <h2>{yes_responses[currentQuestionIndex]}</h2>
            {shownext&&(
              <button className="next-btn" onClick={handleNextQuestion}>
                Next ques babe<span>{" >>"}</span>
              </button>
            )}
          </div>
        )}

        {click === 'no' &&!isLastQuestion&& (
          <div className="response-content">
            <h2>You can't click it huhh!</h2>
            <img
                src=".\src\images\frustrated.png"
                className="no-img"            
            />
          </div>
        )}
        
        {isLastQuestion && (
        <div className="response-content">
          <h2>That's it !   Text me something!!! 😊</h2>
        </div>
        )}

        </div>
      </section>
       
    );
  };
  
  export default Question;