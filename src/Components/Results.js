import React, { useContext } from 'react'
import resultContext from '../context/Result/ResultContext'
import ResultEvent from './ResultEvent'

const Results = () => {
  const context = useContext(resultContext)
  const {results}=context
  var resultarr = Array.from(Array(results.length/3), () => new Array(3));
  
  for (let index = 0; index < results.length; index++){
    resultarr[Math.floor(index/3)][index%3]=results[index];
  }
  let keys=0;
    return (
      <div>
         {resultarr.map((result) => {
                    return < ResultEvent key={keys++} result={result}/>;
                })}
      </div>
    )
}

export default Results
