import "../styles/titancardstyles.css";

export function TitanCard({ titan }) {
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
        <button className={`titan-card-type ${titan.type}`}>Ver</button>
      </div>
    </div>
  );
}