import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import Landing from './landing.jsx' // ✅ create this page
import Choices from './choices.jsx' // ✅ create this page
import Song from './song.jsx' // ✅ create this page
import Message from './message.jsx' // ✅ create this page
import Memories from './memories.jsx'
import Notes from './quote.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/choices" element={<Choices />} />
        <Route path="/song" element={<Song />} />
        <Route path ="/notes" element={<Notes />} />
        <Route path ="/memories" element={<Memories />} />
        <Route path ="/messages" element={<Message />} />

      
        
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
