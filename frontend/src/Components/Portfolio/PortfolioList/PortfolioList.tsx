import React, { SyntheticEvent } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface Props {
    portfolioValues: string[]
    onPortfolioDelete: (e: SyntheticEvent) => void
}

const PortfolioList = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
    <h3>Your Portfolio</h3>
    <ul>
        {portfolioValues &&
            portfolioValues.map((portfolioValue) => {
                return <PortfolioCard portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>;
            })
        }
    </ul>
    </>
  )
}

export default PortfolioList