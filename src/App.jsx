import { useState } from 'react'
import './css/App.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function App() {
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (answer.toLowerCase() === 'you') {
    
      Swal.fire({
        title: 'Yeyy !',
        text: 'Kala ko nakalimutan mo ehh 💖',
        icon: 'success',
        confirmButtonText: 'Yay!',
      })
      .then(() => {
        navigate('/Landing')
      })
    } else {
      Swal.fire({
        title: 'Ayy',
        text: 'Nakalimutan mo na? Try again! 💌',
        icon: 'error',
        confirmButtonText: 'Retry',
      })
    }
  }

  return (
    <div className="Container">
      <h1 className="Title">This is Dedicated only for you</h1>

      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Quiz Time</h1>
        <p>Answer this question</p>

        <h4 className="bio">Biosphere means body of life</h4>
        <h4 className="hydro">Hydrosphere means body of water</h4>

        <h2 className="big">What is biggesphere?</h2>

        <label htmlFor="answer">Your Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
