'use client';

import { useEffect, useState } from 'react';

const messages = [
  "Preparing pixel-perfect portfolio... 🎮",
  "Loading awesome projects... 🚀",
  "Initializing AI systems... 🤖",
  "Compiling code magic... ✨",
  "Almost there... 🎯"
];

function LoadingMessages() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-6 text-xl text-primary animate-pulse">
      {messages[messageIndex]}
    </p>
  );
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2500); // 2.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Spinning Coin */}
        <div className="relative inline-block mb-8">
          <div className="coin-spinner">
            <div className="coin">
              <div className="coin-front text-6xl">🪙</div>
              <div className="coin-back text-6xl">💰</div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 
          className="text-2xl md:text-3xl mb-4 text-[#ff6b35]"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          LOADING...
        </h2>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="pixel-card p-2 bg-[var(--card-bg)]">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 border-2 border-[var(--pixel-border)] overflow-hidden">
              <div className="loading-bar h-full bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ffd93d]"></div>
            </div>
          </div>
        </div>

        {/* Fun Loading Messages */}
        <LoadingMessages />
      </div>

      <style jsx>{`
        .coin-spinner {
          perspective: 1000px;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coin {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 2s linear infinite;
          filter: drop-shadow(0 10px 20px rgba(255, 107, 53, 0.3));
        }

        .coin-front,
        .coin-back {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd93d 0%, #f7931e 50%, #ff6b35 100%);
          border: 4px solid var(--pixel-border);
        }

        .coin-back {
          transform: rotateY(180deg);
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .loading-bar {
          animation: progress 2s ease-in-out;
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        /* Pixel art style bounce */
        .coin-spinner::before {
          content: '';
          position: absolute;
          bottom: -40px;
          width: 80px;
          height: 20px;
          background: radial-gradient(ellipse, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: shadow 2s linear infinite;
        }

        @keyframes shadow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
