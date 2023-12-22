import React from 'react'
import "./card.css"
import "./flip.css"

function Card({onClick, question, answer}) {
  return (
    <div  className='card' onClick={onClick}>
        <div className="card-back">{answer}</div>
        <div className="card-front">{question}</div>
    </div>
  )
}

export default Card