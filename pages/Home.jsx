import HeroSection from "../src/Landing/HeroSection";
import InfoSection from "../src/Landing/InfoSection";
import EventsSection from "../src/Landing/EventsSection";
import MerchandiseSection from "../src/Landing/MerchandiseSection";
import SpeakersSection from "../src/Landing/SpeakersSection";
import GallerySection from "../src/Landing/GallerySection";
import SponsorsSection from "../src/Landing/SponsorsSection";
import TestimonialsSection from "../src/Landing/TestimonialsSection";

export default function Home() {
  return (
    <div
      id="Home"
      className="bg-[#141232] w-full flex flex-col items-center relative overflow-x-hidden"
    >
      {/* Global Animation Styles */}
      <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } 
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .pause-on-hover:hover {
                    animation-play-state: paused;
                }
                @keyframes star-pulse {
                    0%, 100% { 
                        filter: drop-shadow(0 0 2px #8D42FD) drop-shadow(0 0 5px #8D42FD); 
                        transform: scale(1);
                    }
                    50% { 
                        filter: drop-shadow(0 0 15px #8D42FD) drop-shadow(0 0 20px #8D42FD); 
                        transform: scale(1.05);
                    }
                }
                .star-glow {
                    animation: star-pulse 2s ease-in-out infinite;
                }
                .star-glow:hover {
                    animation-play-state: paused; 
                    filter: drop-shadow(0 0 25px #8D42FD); 
                }
                #trophy-star-container:hover svg {
                    filter: drop-shadow(0 0 10px #8D42FD) drop-shadow(0 0 20px #8D42FD);
                    transition: 0.3s ease-in-out;
                }
                #trophy-star-container svg path {
                    transition: stroke-width 0.25s ease, filter 0.25s ease;
                }
                #trophy-star-container:hover svg path {
                    stroke-width: 1.2px; 
                }
                #tie-star-container:hover svg path {
                    stroke-width: 1.2px;   
                    filter: drop-shadow(0 0 10px #FFFFFF);
                }
            `}</style>

      <HeroSection />
      <InfoSection />
      <EventsSection />
      <SpeakersSection />
      <GallerySection />
      <TestimonialsSection />
    </div>
  );
}
