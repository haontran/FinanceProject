import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutlet, useOutletContext } from 'react-router-dom';
import { getCashFlowStatement } from '../../api';
import Table from '../Table/Table';

interface Props {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>()
    const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>()
    useEffect(() => {
        const fetchCashflow = async () => {
            const result = await getCashFlowStatement(ticker!)
            setCashflow(result!.data)
        }
        fetchCashflow()
    }, [])
  return (
    <>
    { cashflowData ? (
        <Table config={config} data={cashflowData} />
    ): (
        <h1>No result</h1>
    )}
    </>
  )
}

export default CashFlowStatement