import React from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface Props {
    portfolioValues: string[]
}

const PortfolioList = ({portfolioValues}: Props) => {
  return (
    <>
    <h3>Your Portfolio</h3>
    <ul>
        {portfolioValues &&
            portfolioValues.map((portfolioValue) => {
                return <PortfolioCard portfolioValue={portfolioValue}/>;
            })
        }
    </ul>
    </>
  )
}

export default PortfolioList