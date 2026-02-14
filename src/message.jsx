import React from 'react';
import './css/message.css';

export default function Messages() {
    return (
        <div className="message-page">
            <div className="message-wrapper">
                {/* Envelope flap decoration */}
                <div className="envelope-decoration">
                    <div className="envelope-flap">
                        <svg viewBox="0 0 100 100">
                            <path d="M 50 30 L 70 50 L 50 55 L 30 50 Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>

                {/* Main letter container */}
                <div className="letter-container">
                    {/* Decorative corners */}
                    <div className="corner corner-top-left"></div>
                    <div className="corner corner-top-right"></div>
                    <div className="corner corner-bottom-left"></div>
                    <div className="corner corner-bottom-right"></div>

                    {/* Watermark pattern */}
                    <div className="watermark-pattern"></div>

                    {/* Content */}
                    <div className="letter-content">
                        {/* Header with date */}
                        <div className="letter-header">
                            <div className="header-date">
                                Happy Hearts Day
                            </div>
                            <h1 className="header-title">
                                To My Dearest Mahal
                            </h1>
                            <div className="header-divider">
                                <div className="divider-line"></div>
                                <svg className="divider-heart" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <div className="divider-line"></div>
                            </div>
                        </div>

                        {/* Letter body */}
                        <div className="letter-body">
                            <p className="first-paragraph">
                                I know this may seem corny, but I want to take this special occasion to pour my heart out to you. Thank you, my love, for being by my side through every moment—the joyous ones and the challenging ones alike. Maraming salamat.
                            </p>

                            <p className="highlight-quote">
                                You are not just my partner, my girlfriend, and my fiancée. You are my home, my life, and my everything. You are my safest place, my refuge, my pahinga.
                            </p>

                            <p>
                                I love you so much, Mahal ko. I cannot imagine my life without you in it. You have become the very rhythm of my heartbeat, the reason I wake with hope each morning.
                            </p>

                            <p>
                                Mahal, hintayin mo ko. Soon, we will reach the success we dream of together. I promise you, there will come a day when you will be proud to introduce me to your parents and grandparents. This past year flew by so quickly, didn't it? I know you have the patience and faith to wait for me—I'm certain of that.
                            </p>

                            <p>
                                Whatever problems we may face, let us solve them together. Never carry your burdens alone, and I promise never to carry mine alone either. I'm always here, standing beside you. I will never disappear from your life.
                            </p>

                            <p className="center-quote">
                                If there's one person I want to spend forever with,<br/>
                                it's you and only you.
                            </p>

                            <p>
                                Walang iba. No one else. And I will never give up on us. That's a promise I intend to keep until my last breath.
                            </p>

                            {/* Closing */}
                            <div className="letter-closing">
                                <p className="closing-message">
                                    I love you 3000 and many thousand more
                                </p>
                                <div className="closing-signature">
                                    <p className="signature-line">
                                        Forever yours,
                                    </p>
                                    <p className="signature-name">
                                        Your Mahal
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative hearts */}
                        <div className="decorative-hearts">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="heart-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>

                        {/* Wax seal effect */}
                        <div className="wax-seal-container">
                            <div className="wax-seal">
                                <svg className="seal-heart" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}