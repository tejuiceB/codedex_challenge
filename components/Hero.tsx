'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "HI, I'M TEJAS!";

  useEffect(() => {
    // Wait for loading screen to finish (2.5s + 0.5s fade = 3s total)
    const loadingDelay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }, 3000); // Start typing after 3 seconds

    return () => clearTimeout(loadingDelay);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl mb-6 retro-heading text-[#ff6b35]"
            >
              {displayText}
              <span className="animate-pulse">_</span>
            </h1>

            <p className="text-2xl md:text-3xl mb-8 text-primary font-bold">
              Software Developer & AI Engineer 🚀
            </p>

            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 text-primary">
              Building intelligent systems with AI, robotics, and full-stack development. 
              Passionate about automation, space systems, and real-world impact! 🤖
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="pixel-button px-8 py-4 text-sm"
              >
                VIEW PROJECTS
              </button>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="pixel-button px-8 py-4 text-sm bg-[#f7931e]"
              >
                CONTACT ME
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <div className="pixel-card p-3 sm:p-4 text-center">
                <div
                  className="text-xl sm:text-3xl font-bold text-[#ff6b35] mb-1"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  300+
                </div>
                <div className="text-sm sm:text-lg text-primary">DSA Solved</div>
              </div>
              <div className="pixel-card p-3 sm:p-4 text-center">
                <div
                  className="text-xl sm:text-3xl font-bold text-[#ff6b35] mb-1"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  6+
                </div>
                <div className="text-sm sm:text-lg text-primary">Projects</div>
              </div>
              <div className="pixel-card p-3 sm:p-4 text-center">
                <div
                  className="text-xl sm:text-3xl font-bold text-[#ff6b35] mb-1"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  5+
                </div>
                <div className="text-sm sm:text-lg text-primary">Hackathons</div>
              </div>
            </div>
          </div>

          {/* Avatar/Character */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="pixel-card p-8 bg-gradient-to-br from-[#ffd93d] to-[#f7931e] overflow-hidden">
                <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
                  {/* Your Photo */}
                  <Image 
                    src="/tejuice.png" 
                    alt="Tejas Bhurbhure"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div
                className="absolute -top-4 -right-4 bg-[#ff6b35] text-white px-4 py-2 border-4 border-[#8b4513] rotate-12 animate-bounce"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
              >
                CODÉDEX
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-bounce">
          <div className="text-4xl text-[#ff6b35]">↓</div>
          <p className="text-xl text-primary font-bold">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
