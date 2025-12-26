import React, { useState } from "react";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="NavbarWrapper" className="w-full flex justify-center lg:justify-start lg:pl-[2.5%] absolute z-[10000] top-[1.69rem] lg:top-0 max-md:top-[0.5vh]">

            <div id="Navbar" className={`
                border-[0.25px] border-[#2C2945] 
                backdrop-blur-[2px] 
                relative z-20 transition-all duration-300 ease-in-out
                
                px-[1.37rem] py-[0.69rem]

                // Desktop Styles
                lg:w-[95%] lg:h-[4.5rem] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-[1.2vh] lg:rounded-[1.125rem]
                
                // Mobile Styles
                w-[95%] rounded-[5px]
                ${isMenuOpen ? 'h-auto flex flex-col bg-[rgba(255,249,240,0.50)] text-shadow-lg' : 'h-[12vw] flex items-center justify-between bg-[rgba(255,249,240,0.10)]'} 
            `}>

                {/* --- Header Part (Logo + Hamburger) --- */}
                <div className={`
                    w-full flex flex-row justify-between items-center
                    lg:w-auto lg:h-[3.1875rem] lg:justify-start
                `}>

                    {/* Logo */}
                    <div id="udgam-logo-container" className="p-0">
                        <a href="#" id="nav-udgam-logo" className="w-[1.125rem] h-[3.1875rem] cursor-pointer block max-md:h-[4.5vh]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 51" fill="none" className="w-[1.125rem] h-[3.1875rem] max-md:h-[4.5vh] ">
                                <path d="M7.90244 16.0061L12.2965 0L18 18.4594L7.90244 16.0061Z" fill="#FFF9F0" />
                                <path d="M6.1383 41.8058L17.8958 23.5434L10.7655 51L6.1383 41.8058Z" fill="#FFF9F0" />
                                <path d="M6.65476 19.4935C7.44902 23.7367 8.19886 27.7427 8.99554 32.0008L0 26.8918C1.50906 23.4263 2.98277 20.0417 4.5739 16.3841C4.92921 18.0859 5.22529 19.5058 5.52761 20.9567L5.77635 22.1506L6.65476 19.4935Z" fill="#FFF9F0" />
                                <path d="M8.04464 18.225L17.8379 20.5549L10.5851 31.9374C10.2497 30.1274 9.92211 28.359 9.59631 26.5998C9.08287 23.8278 8.57365 21.0785 8.04464 18.225Z" fill="#FFF9F0" />
                                <path d="M8.90425 34.3686L5.34264 40.0128C4.77682 38.8305 4.22032 37.667 3.67003 36.5165C2.54065 34.1554 1.43756 31.8492 0.33435 29.5483L8.90425 34.3686Z" fill="#FFF9F0" />
                            </svg>
                        </a>
                    </div>

                    {/* Hamburger Icon (Mobile Only) */}
                    <button onClick={toggleMenu} className="lg:hidden text-[#FFF9F0] focus:outline-none">
                        {isMenuOpen ? (
                            // Close Icon (X)
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon (3 Lines)
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>

                </div>

                {/* --- Nav Links --- */}
                <div id="nav-button-container" className={`
                    w-full lg:w-auto flex flex-col lg:flex-row flex-nowrap 
                    items-start lg:items-center 
                    gap-y-[1.5rem] lg:gap-x-[1.88rem] 
                    text-[#FFF9F0] text-left lg:text-center 
                    font-inter text-[1.32131rem] font-bold leading-normal
                    
                    // Transition Logic
                    ${isMenuOpen ? 'block pt-[2rem] pb-[1rem]' : 'hidden'} lg:flex lg:py-0
                `}>
                    <a href="/" className="hover:text-[#FDD442] transition-colors">Home</a>
                    <a href="/events" className="hover:text-[#FDD442] transition-colors">Events</a>
                    <a href="/schedule" className="hover:text-[#FDD442] transition-colors">Schedule</a>
                    <a href="/sponsors" className="hover:text-[#FDD442] transition-colors">Sponsors</a>
                    <a href="/team" className="hover:text-[#FDD442] transition-colors">Our Team</a>
                    <button onClick={scrollToBottom} className="hover:text-[#FDD442] transition-colors">Contact Us</button>

                    {/* Mobile "Get Pass" (Moved inside menu) */}
                    <a href="" className="lg:hidden w-full h-[3.5rem] mt-4 flex justify-center items-center rounded-[0.52288rem] bg-[#FDD442] text-[#141131]">
                        Get Pass
                    </a>
                </div>

                {/* --- Desktop "Get Pass" Button (unchanged) --- */}
                <a href="" id="passbutton-desktop" className="hidden lg:flex w-[8.5625rem] h-[2.94131rem] p-[0.78438rem] justify-center gap-x-[0.34rem] items-center flex-shrink-0 rounded-[0.52288rem] bg-[#FDD442]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 49" fill="none" className="stroke-[#2B2844] h-[2.94131rem]">
                        <path d="M1.02271 1.02264L1.02271 47.0379" stroke="#2B2844" strokeWidth="2.04529" strokeLinecap="square" strokeDasharray="4.09 4.09" />
                    </svg>
                    <span id="get-pass-text-desktop" className="text-[#141131] text-center font-inter text-[1.38188rem] font-black leading-normal">Get Pass</span>
                </a>

            </div>
        </div>
    );
}