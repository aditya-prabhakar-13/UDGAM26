export default function InfoSection() {
    return (
        <div id="udgam-info" className='w-full h-[100vh] max-md:h-[50vh] flex flex-row justify-center items-center py-[15vh] max-md:py-[5vh]'>
            <div id="udgam-infovid-container" className='flex flex-col justify-center item-center w-[70%] max-md:w-[60%] h-[100%]'>
                <div id="what-udgam-container" className='rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] flex flex-col items-center justify-center px-[1vw] py-[2vw] max-md:py-[5vw]'>
                    <div id="what-udgam" className="text-[#141131] text-center font-['Creato_Display'] text-[3.6vw] max-md:text-[6vw] font-black leading-normal">
                        What is UDGAM?
                    </div>
                    <div id="udgam-info-text" className='w-full text-[#000] text-center font-inter text-[1.12vw] max-md:text-[2.5vw] font-normal leading-normal item-center justify-center px-[5%]'>
                        UDGAM is the flagship 2-day annual Entrepreneurship Summit of E-Cell, IIT Guwahati, held every January, bringing together founders, investors, product leaders, and aspiring entrepreneurs from across the country. Through workshops, keynote sessions, competitions, and networking opportunities, it fosters entrepreneurial thinking and serves as a catalyst for innovation and startup culture in North-East India and beyond.
                    </div> 
                </div>
                <div id="video-card" className='h-[60%] rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] mt-4 max-md:mt-0'>
                    {/* Video Placeholder */}
                </div>
            </div>
            <div id="gallary-container" className='w-[25%] max-md:w-[30%] h-[100%] rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] ml-4 max-md:ml-0'>
                {/* Gallery Placeholder */}
            </div>
        </div>
    );
}