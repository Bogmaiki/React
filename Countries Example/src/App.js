import { useState } from "react";
import { Countries } from "./components/Countries";
import { useCountriesData } from "./hooks/useCountriesData";

function App() {
  let [from,setFrom]= useState(110);
  let [to,setTo]= useState(114);

  let result = useCountriesData();
  result= result.slice(from,to);
  return <>
     <Countries dataOfCountries={result}></Countries>
        <button 
       onClick={()=>{
          setFrom(from-4);
          setTo(to-4)}
        }>
        Back</button>
        <button 
       onClick={()=>{
          setFrom(from+4);
          setTo(to+4)}
        }>
        Next</button>
  </>;
}

export default App;
