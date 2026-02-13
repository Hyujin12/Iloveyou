import './css/choices.css'
import { gifs } from "./docs/gifs.js";
import { useNavigate } from 'react-router-dom';


export default function Choices() {
    const navigate = useNavigate();
    return(
        <div className="choices-container">
        <h1 className="choices-title">Your Virtual Gifts</h1>
        <div className="gif-section">
        {gifs.map((gifs, index) => (
          <div key={index} className="gif-card">
            <img src={gifs.img} alt={gifs.name} className="gif-image" />
            <h3 className="gif-name">{gifs.name}</h3>
            <button className="gif-button" onClick={()=> navigate(gifs.path)}>{gifs.button}</button>
            
          </div>
        ))}
      </div>
    </div>
    )
}