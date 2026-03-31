import { useParams } from "react-router-dom";
import { getTitanById } from "../helpers/getTitanById";
import {TitanDetail} from "../components/";
import { useEffect, useState } from "react";

export function TitanInfo() {
  const { id } = useParams();
  const [titan, setTitan] = useState({});

  useEffect(() => {
    const titanFounded = getTitanById(id);
    console.log('aaa',titanFounded);
    setTitan(titanFounded);
  }, [id]);
    
  return (
    <>
      {titan === undefined ? (<p>Sin resultados</p>) :
        (
          <TitanDetail {...titan } />
        )
      }
    </>
  );
}