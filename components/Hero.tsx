'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, MapPin, Phone } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Reduce forced reflows by avoiding unnecessary state updates
    // Optionally, you can throttle resize/scroll listeners if you add them
  }, []);

  const handleDownload = () => {
    // Use a single anchor for better performance and browser compatibility
    const link = document.createElement('a');
    link.href = '/CV/Resume.pdf';
    link.setAttribute('download', 'Rithik_VE_Resume.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-[2vw] sm:px-[3vw] lg:px-[4vw]">
      <div className="container mx-auto grid lg:grid-cols-2 gap-[4vw] sm:gap-[6vw] xl:gap-[8vw] items-center relative z-10 w-full max-w-[95vw]">
        {/* Left Content */}
        <div className="space-y-[3vh] sm:space-y-[4vh] xl:space-y-[5vh] fade-in order-2 lg:order-1">
          <div className="space-y-[2vh] sm:space-y-[2.5vh] xl:space-y-[3vh]">
            <h1 className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] 2xl:text-[4vw] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
              Rithik V E
            </h1>
            <p className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.5vw] font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Robotics & Automation Engineer
            </p>
            <p className="text-[2.8vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.2vw] text-gray-700 max-w-[50vw]">
              Full-stack developer passionate about creating innovative solutions in robotics, 
              IoT, and modern web technologies.
            </p>
          </div>
          {/* Contact Info */}
          <div className="flex flex-wrap gap-[2vw] sm:gap-[3vw] text-gray-700 text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]">
            <div className="flex items-center gap-[1vw]">
              <MapPin className="text-blue-500 w-[2.5vw] h-[2.5vw] sm:w-[2vw] sm:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] 2xl:w-[1vw] 2xl:h-[1vw]" />
              <span>Chennai</span>
            </div>
            <div className="flex items-center gap-[1vw]">
              <Phone className="text-blue-500 w-[2.5vw] h-[2.5vw] sm:w-[2vw] sm:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] 2xl:w-[1vw] 2xl:h-[1vw]" />
              <span>+91 90250 16516</span>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-[2vw] sm:gap-[2.5vw] xl:gap-[3vw]">
            <a
              href="https://github.com/Rithik-0617"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-[1.5vw] sm:p-[1.2vw] lg:p-[1vw] xl:p-[0.8vw] 2xl:p-[0.6vw] bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Github className="text-blue-700 w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rithikve"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-[1.5vw] sm:p-[1.2vw] lg:p-[1vw] xl:p-[0.8vw] 2xl:p-[0.6vw] bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="text-blue-700 w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
            </a>
          </div>
          {/* CTA Buttons */}
          <div className="flex gap-[2vw]">
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-[3vw] sm:px-[2.5vw] lg:px-[2vw] xl:px-[1.8vw] 2xl:px-[1.5vw] py-[1.5vw] sm:py-[1.2vw] lg:py-[1vw] xl:py-[0.8vw] 2xl:py-[0.6vw] rounded-lg transition-all duration-200 font-semibold flex items-center justify-center gap-[1vw] hover:scale-105 shadow-lg hover:shadow-xl text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]"
              aria-label="Download Resume"
            >
              📄 Download Resume
            </button>
          </div>
        </div>
        {/* Right Content - 3D Spline Scene */}
        <div className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] w-full order-1 lg:order-2">
          <div
            ref={splineContainerRef}
            className="absolute inset-0 rounded-lg overflow-hidden will-change-transform"
            style={{ touchAction: 'pan-y' }}
            onWheel={e => {
              // Forward the wheel event to the window for smooth page scroll
              if (e.ctrlKey || e.altKey || e.metaKey) return;
              window.scrollBy({ top: e.deltaY, behavior: 'smooth' });
              // Prevent default to avoid double scroll in some browsers
              e.preventDefault();
            }}
          >
            {mounted ? (
              <>
                <Spline
                  scene="https://prod.spline.design/CfFkgw-GYVbzlG-5/scene.splinecode"
                  style={{ pointerEvents: 'auto' }}
                />
                {/* Watermark overlay to hide Spline branding - cover entire bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[8vh] sm:h-[10vh] xl:h-[12vh] 2xl:h-[14vh] bg-white z-10 pointer-events-none"></div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;