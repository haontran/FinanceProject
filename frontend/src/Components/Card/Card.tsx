import React, { JSX } from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element=> {
  return (
    <div className="card">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/500px-Apple_logo_black.svg.png?20220821121934"
            alt=""
        />
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga placeat vel voluptatum error aperiam, voluptatibus cum reprehenderit ab voluptatem cupiditate eius amet? Nostrum minima nobis dolorem ducimus quibusdam voluptatibus commodi?</p>
    </div>
  )
}

export default Card