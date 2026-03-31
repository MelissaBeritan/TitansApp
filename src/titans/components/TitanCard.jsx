import { useNavigate } from "react-router-dom";
import "../styles/titancardstyles.css";

export function TitanCard({ titan }) {
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`/TitansApp/pure/TitanInfo/${id}`);
  }

  return (
    <div className="titan-card">
      <img 
        src={titan.src} 
        alt={titan.titan}
        className={`titan-card-image ${titan.type}`}
      />
      <div className="titan-card-info">
        <h3 className="titan-card-name">{titan.titan}</h3>
        <p className="titan-card-host">{titan.human_host}</p>
        <button onClick={()=>{onNavigate(titan.id)}} className={`titan-card-type ${titan.type}`}>Ver</button>
      </div>
    </div>
  );
}