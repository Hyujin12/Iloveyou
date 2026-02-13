import { notes } from './docs/notes.js'
import { useState, useMemo } from 'react'
import './css/notes.css'

export default function Notes() {
    const [expandedNote, setExpandedNote] = useState(null);

    // Generate petal positions once
    const petals = useMemo(() => {
        return [...Array(20)].map(() => ({
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 6 + Math.random() * 4,
            size: 15 + Math.random() * 15
        }));
    }, []);

    const handleToggle = (index) => {
        setExpandedNote(expandedNote === index ? null : index);
    };

    return (
        <div className="notes-page">
            {/* Floating sunflower petals */}
            <div className="petals-container">
                {petals.map((petal, i) => (
                    <div
                        key={i}
                        className="floating-petal"
                        style={{
                            left: `${petal.left}%`,
                            animationDelay: `${petal.delay}s`,
                            animationDuration: `${petal.duration}s`,
                            fontSize: `${petal.size}px`
                        }}
                    >
                        🌻
                    </div>
                ))}
            </div>

            <div className="notes-content">
                {/* Header */}
                <div className="notes-header">
                    <div className="sunflower-deco rotating">🌻</div>
                    <h1 className="notes-title">Sunflower Notes For You</h1>
                    <div className="sunflower-deco rotating">🌻</div>
                </div>

                <p className="notes-subtitle">
                    Like sunflowers that follow the sun, my heart always turns to you 🌻
                </p>

                {/* Garden of Notes */}
                <div className="notes-garden">
                    {notes.map((note, index) => (
                        <div
                            key={index}
                            className={`sunflower-note ${expandedNote === index ? 'bloomed' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Sunflower stem and leaves */}
                            <div className="sunflower-stem">
                                <div className="leaf leaf-left">🍃</div>
                                <div className="stem-line"></div>
                                <div className="leaf leaf-right">🍃</div>
                            </div>

                            {/* Sunflower head (clickable) */}
                            <div 
                                className="sunflower-head"
                                onClick={() => handleToggle(index)}
                            >
                                {/* Petals */}
                                <div className="petals-ring">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="petal"
                                            style={{
                                                transform: `rotate(${i * 30}deg) translateY(-25px)`
                                            }}
                                        >
                                            <div className="petal-shape"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Center of sunflower */}
                                <div className="sunflower-center">
                                    <div className="center-pattern"></div>
                                    <div className="note-number">{index + 1}</div>
                                </div>

                                {/* Note title */}
                                <div className="note-title-badge">
                                    <span>{note.name}</span>
                                </div>
                            </div>

                            {/* Expandable content */}
                            <div className="note-content-wrapper">
                                <div className="note-content">
                                    <div className="content-border-top">
                                        <span className="border-sunflower">🌻</span>
                                    </div>
                                    
                                    <div className="content-box">
                                        <p className="note-message">{note.content}</p>
                                    </div>

                                    <div className="content-border-bottom">
                                        <span className="border-sunflower">🌻</span>
                                    </div>

                                    <button 
                                        className="close-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle(index);
                                        }}
                                    >
                                        Close 🌻
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom message */}
                <div className="garden-footer">
                    <div className="footer-decoration">
                        <span className="footer-flower">🌻</span>
                        <div className="footer-line"></div>
                        <span className="footer-flower">🌻</span>
                        <div className="footer-line"></div>
                        <span className="footer-flower">🌻</span>
                    </div>
                    
                    <p className="footer-text">
                        You are my sunshine, the one who makes my world bright and beautiful. 
                        Just like these sunflowers, I'll always turn towards you, no matter what.
                    </p>
                    
                    <div className="footer-signature">
                        <span>Forever blooming for you,</span>
                        <span className="signature-name">Your Panget 🌻</span>
                    </div>
                </div>
            </div>
        </div>
    );
}