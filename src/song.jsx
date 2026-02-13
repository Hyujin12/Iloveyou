import './css/song.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Song() {
  const sender = "Panget";
  const recipient = "My Pretty Girlfriend";
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [heartsArray, setHeartsArray] = useState([]);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const navigate = useNavigate();
  const backtoChoices = () => {
    navigate('/choices');
  }

  const handleOpenButton = () => {
    setShowEnvelope(true);
  }

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
  }

  const messages = [
    "This song became my favorite the moment I heard it from you.",
    "Before ka dumating, I feel so helpless and lost.",
    "Thank you dumating ka sa buhay ko, sinagip mo ako.",
    "Thank you for being my lakas ko para lumaban sa buhay.",
    "Thank you sa pananatili kahit minsan ay mahirap ang lahat.",
    "I promise to always be by your side, through thick and thin.",
    "No words can express how deeply I love you."
  ];

  // Reveal messages one by one (only when envelope is open)
  useEffect(() => {
    if (envelopeOpen) {
      messages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, index]);
        }, index * 1600);
      });
    }
  }, [envelopeOpen]);

  // Generate floating hearts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 15 + Math.random() * 15
      };
      setHeartsArray(prev => [...prev, newHeart]);

      // Remove hearts after animation
      setTimeout(() => {
        setHeartsArray(prev => prev.filter(h => h.id !== newHeart.id));
      }, 5000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="song-page">
      {/* Floating hearts background */}
      <div className="hearts-container">
        {heartsArray.map(heart => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="content-wrapper">
        <div className="song-section">
          <h2 className="dedication-title">
            <span className="title-heart">💕</span>
            Dedication Song
            <span className="title-heart">💕</span>
          </h2>
          <div className="spotify-wrapper">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/0hC02vQEEYV2T3MHkbcNSY?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Initial Open Button */}
        {!showEnvelope && (
          <div className="open-button-container">
            <button onClick={handleOpenButton} className="open-letter-button">
              Open My Letter 💌
            </button>
          </div>
        )}

        {/* Envelope */}
        {showEnvelope && !envelopeOpen && (
          <div className="envelope-container" onClick={handleEnvelopeClick}>
            <div className="envelope">
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-heart-seal">❤️</div>
              </div>
              <p className="envelope-hint">Click to open</p>
            </div>
          </div>
        )}

        {/* Letter Content */}
        {envelopeOpen && (
          <div className="love-letter-container">
            {/* Decorative corner hearts */}
            <div className="corner-decoration top-left">❤️</div>
            <div className="corner-decoration top-right">❤️</div>
            <div className="corner-decoration bottom-left">❤️</div>
            <div className="corner-decoration bottom-right">❤️</div>

            <div className="love-letter-header">
              <p className="header-text">To: {recipient}</p>
              <div className="header-divider"></div>
            </div>

            <div className="love-letter-body">
              {messages.map((msg, index) => (
                <p 
                  key={index} 
                  className={`love-letter-message ${visibleMessages.includes(index) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  <span className="message-bullet">♥</span>
                  {msg}
                </p>
              ))}
            </div>

            <div className="love-letter-footer">
              <div className="footer-divider"></div>
              <p className="footer-text">Ang corny mong boyfriend,</p>
              <p className="sender-name">{sender} ❤️</p>
            </div>

            {/* Envelope seal effect */}
            <div className="envelope-seal">💌</div>
          </div>
        )}

        {envelopeOpen && (
          <button onClick={backtoChoices} className="back-button">
            <span className="button-icon">←</span>
            Back to Home
            <span className="button-heart">💖</span>
          </button>
        )}
      </div>
    </div>
  )
}