import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/SearchBar/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import { isArray } from 'util';
import PortfolioList from './Components/Portfolio/PortfolioList/PortfolioList';

function App() {
  const [search, setSearch] = useState<string>("")
  const [portfoliioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    //console.log(e)
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    const exists = portfoliioValues.find((value) => value === e.target[0].value)
    if (exists) return;
    const updatedPortfolio = [...portfoliioValues, e.target[0].value]
    setPortfolioValues(updatedPortfolio)
    //console.log(e)
  }

  const onPortfilioDelete = (e: any) => {
    e.preventDefault()
    const removed = portfoliioValues.filter((value) => {
      return value !== e.target[0].value
    })
    setPortfolioValues(removed)
  }
  
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const result = await searchCompanies(search)
    if(typeof result === "string") {
      setServerError(result)
    } else if(Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
    //console.log(searchResult)
  }
  return (
    <div className="App">
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange} />
      <PortfolioList 
        portfolioValues={portfoliioValues}
        onPortfolioDelete={onPortfilioDelete}
      />
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
