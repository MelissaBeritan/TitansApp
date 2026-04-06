/* import { history, review } from "../data/review";
import legionImg from "../../assets/homepage/legion.png";
import { TitanList } from "../components";

export function HomeTitansPage() {
  return (
    <>
      <div>
        <h3>"Ese día, la humanidad recordó... el terror de ser dominados, la vergüenza de ser encerrados en jaulas..."</h3>
        <p>{review}</p>
      </div>
      <img src={legionImg} alt="Legion de Reconocimiento" />
      <hr />
      <div>
        <h3>La Verdadera Historia de los Titanes</h3>
        <p>{history}</p>
      <TitanList type={'shifting'}/>
      </div>
    </>
  )
} */

import { history, review } from "../data/review";
import legionImg from "../../assets/homepage/legion.png";
import { TitanList } from "../components";
import "../styles/homepage.css"; // ← importar CSS

export function HomeTitansPage() {
  return (
    <div className="home-container"> {/* ← contenedor principal */}
      <div className="review-section"> {/* ← sección reseña */}
        <h3>"Ese día, la humanidad recordó... el terror de ser dominados, la vergüenza de ser encerrados en jaulas..."</h3>
        <p>{review}</p>
      </div>
      
      <img className="legion-image" src={legionImg} alt="Legion de Reconocimiento" /> {/* ← clase imagen */}
      
      <hr className="divider" /> {/* ← línea horizontal mejorada */}
      
      <div className="history-section"> {/* ← sección historia */}
        <h3>La Verdadera Historia de los Titanes</h3>
        <p>{history}</p>
      </div>
      
      <div className="titans-section"> {/* ← sección titanes */}
        <h4>Titanes Cambiantes</h4>
        <TitanList type={'shifting'}/>
      </div>
    </div>
  );
}
