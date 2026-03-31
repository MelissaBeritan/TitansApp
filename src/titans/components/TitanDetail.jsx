import "../styles/titandetail.css";

export function TitanDetail({ name, human_host, first_appearance, abilities, src }) {
    return (
        <div className="titan-detail-container">
            <div className="titan-detail-card">
                <div className="titan-detail-image-wrapper">
                    <img 
                        src={src} 
                        alt={name}
                        className="titan-detail-image"
                    />
                </div>
                
                <div className="titan-detail-info">
                    <h1 className="titan-detail-name">{name}</h1>
                    
                    <div className="titan-detail-section">
                        <h3>Host Humano</h3>
                        <p>{human_host}</p>
                    </div>
                    
                    <div className="titan-detail-section">
                        <h3>Primera Aparición</h3>
                        <p>{first_appearance}</p>
                    </div>
                    
                    <div className="titan-detail-section">
                        <h3>Habilidades</h3>
                        <p className="titan-detail-abilities">{abilities}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}