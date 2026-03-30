import { useEffect, useState } from "react"
import { getTitanByType } from "../helpers/getTitanByType";

export function TitanList({ type }) {
  const [titanList, setTitanList] = useState([]);

  useEffect(() => {
    const titans = getTitanByType(type);
    setTitanList(titans);
  }, [type])


  return (
    <ul>
      {titanList.map(
        titan => {
          <li>{ titan.titan}</li>
        }
      )}
    </ul>
  )
}
