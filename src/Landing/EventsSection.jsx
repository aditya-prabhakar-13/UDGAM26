import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// --- IMPORT IMAGES HERE ---
import internTie from "../assets/events/assets/intern_tie_straight.svg";
import paperclips from "../assets/events/assets/paperclips_both.svg";
import hired from "../assets/events/assets/hired.svg";
import disrupt00 from "/disrupt00.svg";
import disrupt01 from "/disrupt01.svg";
import disrupt10 from "/disrupt10.svg";

const EventCardPlaceholder = ({title, color, regLink}) => (
    <div className={`w-full h-full ${color} flex flex-col items-center justify-center p-8 max-md:p-0 text-center border-4 border-[#141131] rounded-[2rem]`}>
        <h2 className="text-4xl font-black text-white font-['Creato_Display'] mb-4 tracking-wider">{title}</h2>
        <a href={regLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#141131] text-[#FFF2E1] px-6 py-2 rounded-lg font-bold font-inter mt-4 hover:scale-105 transition-transform">
                REGISTER NOW
            </button>
        </a>
    </div>
);

const InternfairCard = ({ regLink, passLink }) => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between p-10 bg-[#FFF2E1] rounded-[2rem] border-4 border-[#141131]">
      
      {/* LEFT CONTENT */}
      <div className="w-[55%] flex flex-col gap-6">
        <h1 className="font-['Creato_Display'] text-[#032D29] text-[4.5rem] font-black leading-[0.9]">
          INTERNFAIR
        </h1>

        <h2 className="font-['Creato_Display'] text-[#032D29] text-[32px] font-semibold">
          Unlock Industry Partnership
        </h2>

        <p className="font-['Inter'] text-[#032D29] text-[1.05rem] leading-relaxed max-w-xl">
          Internfair is a platform exclusively for IIT Guwahati students,
          offering internships in diverse profiles like Software Development,
          Analytics, and Product Management. It helps students gain industry
          exposure and prepares them for upcoming placements and internships.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-2">
          {/* NEED A PASS */}
        <a href={regLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-3 bg-[#032D29] text-[#FFF2E1] px-6 py-3 min-h-[52px] rounded-xl font-['Inter'] font-semibold hover:scale-105 transition-transform">
                NEED A PASS
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                >
                <path
                    d="M12.6022 0.938232C12.6022 0.420103 12.1822 7.76841e-05 11.6641 7.86956e-05L3.22068 7.84427e-05C2.70256 7.81055e-05 2.28253 0.420104 2.28253 0.938232C2.28253 1.45636 2.70256 1.87638 3.22068 1.87638H10.7259V9.38161C10.7259 9.89974 11.1459 10.3198 11.6641 10.3198C12.1822 10.3198 12.6022 9.89974 12.6022 9.38161L12.6022 0.938232ZM0.664062 11.9382L1.32744 12.6016L12.3274 1.60161L11.6641 0.938232L11.0007 0.274857L0.000687975 11.2749L0.664062 11.9382Z"
                    fill="#FFF2E1"
                />
                </svg>
            </button>
        </a>
        {/* KNOW MORE */}
        <a href={regLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-4 bg-[#FBD03E] text-[#2F2F2F] px-6 py-3 min-h-[52px] rounded-xl font-extrabold hover:scale-105 transition-transform">
                KNOW MORE

                <span className="w-8 h-8 rounded-lg border-2 border-[#032D29] flex items-center justify-center flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                        d="M3 12h18M15 5l7 7-7 7"
                        stroke="#032D29"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
        </a>
        </div>
      </div>

      {/* RIGHT 2x2 GRID */}
      <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="rounded-2xl bg-[#EFEFEF] flex items-center justify-center p-6">
            <img
            src={internTie} // FIXED
            alt=""
            className="rotate-0 max-w-none w-[300%] h-auto translate-y-3"
            />

        </div>

        <div className="rounded-2xl bg-[#EFEFEF] flex items-center justify-center p-6">
          <img
            src={paperclips} // FIXED
            alt=""
            className="rotate-[15deg] max-w-none w-[300%] h-auto"
            />
        </div>

        <div className="rounded-2xl bg-[#EFEFEF] flex items-center justify-center p-6 rotate-[-6deg]">
          <img
            src={hired} // FIXED
            alt=""
            className="rotate-[12deg] max-w-none w-[200%] h-auto"
            />
        </div>

        <div className="rounded-2xl bg-[#FBD03E] flex flex-col justify-between p-6 text-[#032D29] font-['Inter'] h-full">
  
            <div className="text-[40px] font-extrabold tracking-[0.2em] text-left leading-none">
                JAN
            </div>

            <div className="flex justify-end items-start leading-none leading-none">
                <span className="text-[52px] font-extrabold">23</span>
                <span className="text-[18px] font-bold mt-1 ml-1">rd</span>
            </div>

            <div className="text-[18px] font-semibold tracking-[0.15em] text-center leading-none">
                SATURDAY
            </div>

        </div>


      </div>
    </div>
  );
};

const DisruptCard = ({ regLink, passLink }) => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between p-10 bg-[#070C17] rounded-[2rem] border-1 border-[#FFF9F0]">
      
      {/* LEFT CONTENT */}
      <div className="w-[55%] flex flex-col gap-6">
        <h1 className="font-['Creato_Display'] text-[#FEFBF1] text-[4.5rem] font-black leading-[0.9]">
          DISRUPT
        </h1>

        <h2 className="font-['Creato_Display'] text-[#D9FE78] text-[32px] font-semibold">
          Pitch Ideas, Win Investments
        </h2>

        <p className="font-['Inter'] text-[#FEFBF1] text-[1.05rem] leading-relaxed max-w-xl">
          Disrupt Is North-East India's Largest Pitching Battle,OfferingStartups The Opportunity To Pitch Ideas Investors, VCs and Angels. Finalist Receive Mentorship ,Tools , Prizes With Winner Securing Investments To Scale Their Ventures
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-2">
          {/* NEED A PASS */}
        <a href={regLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-3 bg-[#D9FE78] text-[#2F2F2F] px-6 py-3 min-h-[52px] rounded-xl font-['Inter'] font-semibold hover:scale-105 transition-transform">
                REGISTER
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                >
                <path
                    d="M12.6022 0.938232C12.6022 0.420103 12.1822 7.76841e-05 11.6641 7.86956e-05L3.22068 7.84427e-05C2.70256 7.81055e-05 2.28253 0.420104 2.28253 0.938232C2.28253 1.45636 2.70256 1.87638 3.22068 1.87638H10.7259V9.38161C10.7259 9.89974 11.1459 10.3198 11.6641 10.3198C12.1822 10.3198 12.6022 9.89974 12.6022 9.38161L12.6022 0.938232ZM0.664062 11.9382L1.32744 12.6016L12.3274 1.60161L11.6641 0.938232L11.0007 0.274857L0.000687975 11.2749L0.664062 11.9382Z"
                    fill="#2F2F2F"
                />
                </svg>
            </button>
        </a>
        {/* KNOW MORE */}
        <a href={regLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-4 bg-[#D9FE78] text-[#2F2F2F] px-6 py-3 min-h-[52px] rounded-xl font-extrabold hover:scale-105 transition-transform">
                KNOW MORE

                <span className="w-8 h-8 rounded-lg border-2 border-[#032D29] flex items-center justify-center flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                        d="M3 12h18M15 5l7 7-7 7"
                        stroke="#032D29"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
        </a>
        </div>
      </div>

      {/* RIGHT 2x2 GRID */}
      <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="rounded-2xl bg-[#171C27] flex items-center justify-center p-6">
            <img
            src={disrupt00} // FIXED
            alt=""
            className="rotate-0 max-w-none w-[300%] h-auto translate-y-3"
            />

        </div>

        <div className="rounded-2xl bg-[#171C27] flex items-center justify-center p-6">
          <img
            src={disrupt01} // FIXED
            alt=""
            className="rotate-[15deg] max-w-none w-[300%] h-auto"
            />
        </div>

        <div className="rounded-2xl bg-[#171C27] flex items-center justify-center p-6 rotate-[-6deg]">
          <img
            src={disrupt10} // FIXED
            alt=""
            className="rotate-[12deg] max-w-none w-[200%] h-auto"
            />
        </div>

        <div className="rounded-2xl bg-[#1B46F4] flex flex-col justify-between p-6 text-[#FEFBF1] font-['Inter'] h-full">
  
            <div className="text-[40px] font-extrabold tracking-[0.2em] text-left leading-none">
                JAN
            </div>

            <div className="flex justify-end items-start leading-none leading-none">
                <span className="text-[52px] font-extrabold">23</span>
                <span className="text-[18px] font-bold mt-1 ml-1">rd</span>
            </div>

            <div className="text-[18px] font-semibold tracking-[0.15em] text-center leading-none">
                SATURDAY
            </div>

        </div>


      </div>
    </div>
  );
};

export default function EventsSection() {
    const [currentEvent, setCurrentEvent] = useState(0);
    const navigate = useNavigate();
    // --- SWIPE STATE ---
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50; // Threshold for a valid swipe

    const eventComponents = [
        <EventCardPlaceholder key="1" title="DISRUPT" color="bg-purple-600" regLink = "https://unstop.com/competitions/disrupt26-the-ultimate-startup-bootcamp-iit-guwahati-1545893"/>,
        <EventCardPlaceholder key="2" title="PMX" color="bg-blue-600" regLink = "https://unstop.com/competitions/pmx-2026-the-product-management-expedition-udgam-2026-iit-guwahati-1602663"/>,
        <EventCardPlaceholder key="3" title="SPARKLE" color="bg-pink-600" regLink = "https://unstop.com/competitions/sparkle-ascend-2026-udgam-2026-iit-guwahati-1603606?lb=h62eJ0a"/>,
        <DisruptCard
            key="4"
            regLink="https://road-to-internfair.notion.site/Road-To-Internfair-2026-2b846bf64908816d91b3ca935c70eab5"
            passLink="#"
        />,
        <InternfairCard
            key="5"
            regLink="https://road-to-internfair.notion.site/Road-To-Internfair-2026-2b846bf64908816d91b3ca935c70eab5"
            passLink="#"
        />,
    ];
    const lenEvents = eventComponents.length;

    const prevEventSlide = () => setCurrentEvent(currentEvent === 0 ? lenEvents - 1 : currentEvent - 1);
    const nextEventSlide = () => setCurrentEvent(currentEvent === lenEvents - 1 ? 0 : currentEvent + 1);

    // --- SWIPE HANDLERS ---
    const onTouchStart = (e) => {
        setTouchEnd(null); 
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextEventSlide();
        } else if (isRightSwipe) {
            prevEventSlide();
        }
    };

    useEffect(() => {
        const eventInterval = setInterval(() => {
            nextEventSlide();
        }, 10000);
        return () => clearInterval(eventInterval);
    }, [currentEvent]); 

    const getEventStyle = (index) => {
        if (index === currentEvent) return "z-20 opacity-100 scale-100 translate-x-0 brightness-100 blur-none pointer-events-auto shadow-2xl";
        if (index === (currentEvent - 1 + lenEvents) % lenEvents) return "z-10 opacity-70 scale-90 -translate-x-[60%] brightness-50 blur-[2px] pointer-events-none";
        if (index === (currentEvent + 1) % lenEvents) return "z-10 opacity-70 scale-90 translate-x-[60%] brightness-50 blur-[2px] pointer-events-none";
        return "z-0 opacity-0 scale-75 translate-x-0 brightness-0 pointer-events-none";
    };

    return (
        <div id="events" className='w-full min-h-[80vh] max-md:h-[30vh] py-[5vh] flex flex-col items-center justify-center relative overflow-hidden'>
            <div id="event-title-container" className='relative'>
                <div id="event-title" className="w-full text-[#FFF2E1] font-[Creato_Display] text-[10.85vw] font-black leading-normal p-0 h-[26.1vh] max-md:h-[6vh]" >
                    EVENTS
                </div>
                <div id="event-star" className='absolute z-999 right-[-6vw] top-[0.5vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 133" fill="none" className="w-[6vw] h-[6vw]">
                        <path d="M133.331 84.5759C124.558 82.2458 115.418 81.6386 106.427 82.7898C97.3842 83.9477 88.6689 86.8614 80.7791 91.3638C72.8892 95.8662 65.9781 101.87 60.4421 109.031C54.9366 116.153 50.8991 124.283 48.554 132.959C48.504 132.946 48.4535 132.934 48.4035 132.921C48.3544 132.908 48.3059 132.893 48.2569 132.88C50.5641 124.193 51.1304 115.134 49.9235 106.213C48.71 97.2428 45.7275 88.5883 41.1459 80.7441C36.5643 72.9 30.4735 66.019 23.2213 60.495C16.2774 55.2058 8.39856 51.2601 4.79222e-05 48.8599C8.4659 50.9228 17.7144 51.2524 26.3071 50.1522C35.3496 48.9943 44.0647 46.0815 51.9546 41.5792C59.8444 37.0767 66.7546 31.0729 72.2906 23.9114C77.7928 16.7936 81.8305 8.67041 84.1763 3.04957e-05C84.1775 0.000370158 84.1788 0.000701781 84.18 0.00104151C81.8757 8.68349 81.3088 17.7379 82.515 26.6541C83.7286 35.624 86.7111 44.2787 91.2926 52.1228C95.8742 59.9669 101.965 66.8479 109.217 72.3719C116.429 77.8649 124.649 81.9082 133.412 84.2768C133.398 84.3291 133.385 84.3815 133.371 84.4337C133.358 84.4811 133.344 84.5285 133.331 84.5759Z" fill="#8D42FD"/>
                    </svg>
                </div>
            </div>
            
            <div 
                id="carousel-container" 
                className="w-full max-w-7xl px-4 flex items-center justify-center relative h-[500px]"
                // Added Touch Event Listeners
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* PREV BUTTON: Hidden on mobile (hidden md:flex) */}
                <button onClick={prevEventSlide} className="hidden md:flex absolute left-4 md:left-20 z-50 w-12 h-12 bg-[#FFF2E1] rounded-full items-center justify-center hover:scale-110 transition-transform shadow-lg group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#141131]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className="relative w-[85%] md:w-[75%] lg:w-[80%] h-full flex items-center justify-center perspective-1000">

                    {eventComponents.map((Component, index) => (
                        <div key={index} className={`absolute top-0 w-full max-md:h-[50vh] h-full rounded-[2rem] transition-all duration-700 ease-in-out transform shadow-xl border-[3px] border-[#141131]/20 bg-[#FFF2E1] ${getEventStyle(index)}`}>
                            {Component}
                        </div>
                    ))}
                </div>

                {/* NEXT BUTTON: Hidden on mobile (hidden md:flex) */}
                <button onClick={nextEventSlide} className="hidden md:flex absolute right-4 md:right-20 z-50 w-12 h-12 bg-[#FFF2E1] rounded-full items-center justify-center hover:scale-110 transition-transform shadow-lg group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#141131]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div id="all-events-button-container" className="flex flex-row justify-center items-center gap-x-[0.5892vw] max-md:gap-x-[4vw] mt-[3.5455vw]">
                <div id="all-events-txt" className="text-[#FDD442] font-['Inter'] text-[1.9726vw] max-md:text-[8vw] not-italic font-semibold leading-normal">
                    All Events
                </div>
                <div
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        navigate("/events");
                    }}
                    className="w-[3.6812vw] h-[3.7563vw] max-md:w-[9vw] max-md:h-[9vw]
                                rounded-[1.1269vw] max-md:rounded-[3vw]
                                bg-[#FDD442] flex items-center justify-center
                                cursor-pointer hover:scale-105 transition-transform"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 17"
                        fill="none"
                        className="w-[1.5025vw] h-[1vw] max-md:w-[5vw] max-md:h-[5vw]"
                    >
                        <path
                        d="M23.6584 9.22146C24.1045 8.77528 24.1045 8.05187 23.6584 7.60569L16.3874 0.334714C15.9412 -0.111469 15.2178 -0.111469 14.7716 0.334714C14.3254 0.780897 14.3254 1.5043 14.7716 1.95049L21.2347 8.41357L14.7716 14.8767C14.3254 15.3228 14.3254 16.0463 14.7716 16.4924C15.2178 16.9386 15.9412 16.9386 16.3874 16.4924L23.6584 9.22146ZM0 8.41357V9.5561H22.8505V8.41357V7.27105H0V8.41357Z"
                        fill="#141131"
                        />
                    </svg>
                    </div>
                </div>

        </div>
    );
}