import React, {useState} from "react";
import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";

function FlippableCard({question, answer}) {
  const[showFront, setShowFront] = useState(true)

 
  return (
    <div className="flippable-card-container">
      <CSSTransition
      in={showFront}
      timeout={300}
      classNames='flip'>
        
        <Card onClick={()=> {
          setShowFront((v) => !v)
        }}
        question={question} answer={answer}/>
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
