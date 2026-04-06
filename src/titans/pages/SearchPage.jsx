import { useState } from "react"
import { getTitanByName } from "../helpers/getTitanByName";
import { TitanList } from "../components/";
import "../styles/searchpanel.css";

export function SearchPage() {
  const [input, setInput] = useState('');
  const [titans, setTitans] = useState(undefined);
  
  const onSearch = ()=>{
    const titans = getTitanByName(input);
    setTitans(titans);
  };
  
  return (
    <>
      <div className="search-panel">
        <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value) }}/>
        <button onClick={onSearch}>Buscar</button>
        <hr/>
      </div>
      <div className="results-container">
        {!titans ? (<h3>Escribe para buscar</h3>) :
          titans.length === 0 ? (<h3>Sin resultados</h3>)  
            :
            (<TitanList titansProp={ titans } /> )
        }
      </div>
    </>
  )
}
