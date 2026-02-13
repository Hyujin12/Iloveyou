import './css/landing.css'
import {useNavigate} from 'react-router-dom'
export default function Landing() {
    const navigate = useNavigate();
  
    const handleOpenGift = () => {
      navigate('/choices');
    }
    return(
        <div className="landing-container">
        <div className="intro-container">
            <h1>This is Virtual Gift for you</h1>
            <p>I hope you like it</p>
            
             
        </div>
        <button className="btn" onClick={handleOpenGift}>Open Gift</button>
    </div>
    )
}
