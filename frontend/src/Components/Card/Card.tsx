import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/500px-Apple_logo_black.svg.png?20220821121934"
            alt=""
        />
        <div className="details">
            <h2>AAPL</h2>
            <p>$200</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga placeat vel voluptatum error aperiam, voluptatibus cum reprehenderit ab voluptatem cupiditate eius amet? Nostrum minima nobis dolorem ducimus quibusdam voluptatibus commodi?</p>
    </div>
  )
}

export default Card