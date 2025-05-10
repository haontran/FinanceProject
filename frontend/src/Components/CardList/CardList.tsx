import React, { JSX } from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker="APPL" price={198}/>
        <Card companyName='S&P 500' ticker="SPY" price={564}/>
        <Card companyName='Amazon' ticker="AMZN" price={193}/>
    </div>
  )
}

export default CardList