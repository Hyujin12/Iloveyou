import gandamo from "./assets/images/valentinegifs/gandamo.jpg";
import ganda from "./assets/images/valentinegifs/ganda.jpg"
import pic1 from './assets/images/picture/pic1.jpg'
import pic2 from './assets/images/picture/pic2.jpg'
import pic3 from './assets/images/picture/pic3.jpg'
import pic4 from './assets/images/picture/pic4.jpg'
import pic5 from './assets/images/picture/pic5.jpg'
import pic6 from './assets/images/picture/pic6.jpg'
import pic7 from './assets/images/picture/pic7.jpg'
import pic8 from './assets/images/picture/pic8.jpg'

import './css/memories.css'
import { useState, useEffect } from 'react'

export default function Memories() {
  const [heartsArray, setHeartsArray] = useState([]);

  // Generate floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 4 + Math.random() * 3,
        size: 20 + Math.random() * 20
      };
      setHeartsArray(prev => [...prev, newHeart]);

      setTimeout(() => {
        setHeartsArray(prev => prev.filter(h => h.id !== newHeart.id));
      }, 7000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const memories = [
    {
      image: gandamo,
      caption: "This is my favorite picture of you. Why? Because your smile here is so genuine. Whenever I look at it, all my problems disappear.",
      highlight: true
    },
    {
      image: ganda,
      caption: "Your eyes are so beautiful here, but the truth is you're always beautiful.",
      highlight: true
    },
    {
      image: pic1,
      caption: "Low quality picture pero kitang kita kung gaano ka kaganda. Ayiee ang corny.Sayang di ko nakita na suot mo to WHAHAHAH"
    },
    {
      image: pic2,
      caption: "Naaalala ko tong pic na toh. Wallpaper ko sya buong 2023 and 2024. HomeScreen Wallpaper ko sya nagtataka mga classmate ko kasi alam nila wala akong gf WHAHAHAH"
    },
    {
      image: pic3,
      caption: "Ang cute mo dito. Parang nung pic na campus crush dati na meme noon"
    },
    {
      image: pic4,
      caption: "Ito pa ang cute rin, parang sweet girl yarn."
    },
    {
      image: pic5,
      caption: "Wallpaper ko sa computer hanggang ngayon, di ko pa pinapalitan WHAHAHAH loyal kasi ako "
    },
    {
      image: pic6,
      caption: "Ang tangos ng ilong nyan ahh. Nakaflex pa."
    },
    {
      image: pic7,
      caption: "Lockscreen ko for almost 2 years"
    },
    {
      image: pic8,
      caption: "Ito nung paalis na ako. Sobrang lungkot na may halos saya kasi nakita ulit kita after 9 years.Thank you Mahal kasi hinayaan mo ko makita ka.Loving you is the best decision I've ever made."
    }
  ];

  return (
    <div className="memories-page">
      {/* Floating hearts background */}
      <div className="hearts-bg">
        {heartsArray.map(heart => (
          <div
            key={heart.id}
            className="floating-heart-mem"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="memories-container">
        {/* Header */}
        <div className="memories-header">
          <div className="heart-decoration">💖</div>
          <h1 className="memories-title">Ang pinakamaganda kong Fiancee</h1>
          <div className="heart-decoration">💖</div>
        </div>
        
        <p className="memories-subtitle">
          Every picture tells a story of us, and I treasure each moment we've shared together.
        </p>

        {/* Gallery */}
        <div className="memories-gallery">
          {memories.map((memory, index) => (
            <div 
              key={index} 
              className={`memory-card ${memory.highlight ? 'highlight' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="memory-image-wrapper">
                <img 
                  className="memory-image" 
                  src={memory.image} 
                  alt={`Memory ${index + 1}`} 
                />
                <div className="image-overlay">
                  <span className="overlay-heart">❤️</span>
                </div>
              </div>
              
              <div className="memory-caption">
                <p>{memory.caption}</p>
              </div>
              
              {memory.highlight && (
                <div className="favorite-badge">
                  <span>⭐ Favorite ⭐</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Love note at the bottom */}
        <div className="bottom-love-note">
          <div className="note-divider"></div>
          <p className="note-text">
            "These photos are some of all my favorites pictures. 
            I look forward to making a million more memories with you. I love you always and forever."
          </p>
          <div className="note-signature">
            <span className="signature-heart">💝</span>
            <span className="signature-text">Your Panget</span>
            <span className="signature-heart">💝</span>
          </div>
        </div>
      </div>
    </div>
  );
}