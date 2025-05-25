import React, { useEffect, useState } from 'react'
import { getCompanyProfile } from '../../api'
import { CompanyProfile } from '../../company'
import { useParams } from 'react-router-dom'

interface Props {}

const CompanyPage = (props: Props) => {

  let { ticker } = useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() =>  {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])

  return (
    <div>
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Company not found!</div>
      )}
    </div>
  )
}

export default CompanyPage