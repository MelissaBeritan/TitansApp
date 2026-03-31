import { useEffect, useState } from "react"
import { getTitanByType } from "../helpers/getTitanByType";
import { TitanCard } from "./TitanCard";
import "../styles/titanliststyles.css"; 

export function TitanList({ type }) {
  const [titanList, setTitanList] = useState([]);

  useEffect(() => {
    const titans = getTitanByType(type);
    setTitanList(titans);
  }, [type]);

  return (
    <div className="titan-list-container">
      {titanList.length === 0 ? (
        <div className="titan-list-empty">
          <p>No hay titanes de tipo "{type}"</p>
        </div>
      ) : (
        <div className="titan-list-grid">
          {titanList.map(titan => (
            <TitanCard key={titan.id} titan={titan} />
          ))}
        </div>
      )}
    </div>
  )
}