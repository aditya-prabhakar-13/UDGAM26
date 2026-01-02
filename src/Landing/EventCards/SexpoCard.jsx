import sexpobg from '/sexpo-card-bg.svg';
import sexpobtn from '/sexpo-card-btn.svg';
import sexpostar from '/sexpo-card-star.svg';
import sexpolong from '/sexpo-card-long.svg';



export default function SexpoCard({ regLink, passLink }){
    return(
        <div 
        style={{ backgroundImage: `url(${sexpobg})` }}
        className="w-full h-full flex flex-row items-center justify-center max-md:justify-between gap-x-[3vw] p-[2.63vw] max-md:p-[4vw] bg-[#FEFBF1] rounded-[2.1vw] border-[0.065vw] border-[#FFF9F0]">
              
              {/* LEFT CONTENT */}
              <div className="w-[55%] bg-[#FEFBF1] max-md:w-[70%] h-[95%] flex flex-col gap-[1.58vw] ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 111" fill="none" className="w-[22.63vw] h-[12.3vw] self-start">
                    <path d="M258.777 74.2302C258.777 58.9997 246.39 46.6529 231.109 46.6529C215.829 46.6529 203.442 58.9997 203.442 74.2302C203.442 89.4607 215.829 101.808 231.109 101.808V111L230.871 110.999C210.607 110.871 194.219 94.4583 194.219 74.2302C194.219 53.9228 210.735 37.4604 231.109 37.4604L231.348 37.4612C251.612 37.5891 268 54.0021 268 74.2302L267.999 74.468C267.871 94.666 251.404 111 231.109 111V101.808C246.39 101.808 258.777 89.4607 258.777 74.2302ZM97.0332 75.3055C97.0537 75.3055 103.088 75.3131 107.636 79.7462C112.191 84.1869 119.713 94.6032 125.822 109.169H112.378L112.301 108.893C108.983 97.154 100.646 81.7138 91.0352 76.8445C92.9548 75.872 94.9251 75.3209 96.9166 75.3055H97.0332ZM50.4829 48.214H11.8216V69.2955H47.335V77.7279H11.8216V100.182H50.4829V109.105H0.902041V39.2913H50.4829V48.214ZM164.171 39.2913C179.124 39.2913 188.568 46.9394 188.568 61.157C188.568 75.3747 179.124 82.9247 164.171 82.9247H145.185V109.105H134.265V39.2913H164.171ZM96.9127 74.7663C84.9658 74.8588 73.7757 94.2198 69.7815 108.299L69.6886 108.63H56.2443C62.3539 94.0639 69.8753 83.6477 74.4308 79.207C78.9864 74.7663 85.0333 74.7663 85.0333 74.7663H96.9127ZM145.185 74.6883H162.696C172.435 74.6883 177.649 70.2759 177.649 61.157C177.649 52.0381 172.435 47.5278 162.696 47.5278H145.185V74.6883ZM125.818 39.83C119.709 54.3964 112.187 64.8126 107.632 69.2533C103.076 73.694 97.0292 73.694 97.0292 73.694H85.1497C97.1907 73.6008 108.463 53.9343 112.374 39.83H125.818ZM69.6884 39.2916C72.9526 51.0632 81.3444 66.709 91.0312 71.6166C89.1116 72.5891 87.1413 73.1402 85.1498 73.1556H85.0332C85.0332 73.1556 78.9863 73.1556 74.4307 68.7149C69.8752 64.2742 62.3539 53.858 56.2443 39.2916H69.6884ZM12.08 0C19.7095 0 23.3972 3.67552 23.3972 9.54791H18.989C18.5227 5.57666 16.5306 3.54881 11.9529 3.54881C7.45998 3.54882 5.46788 5.66114 5.46786 8.8719C5.46786 11.1533 6.52751 12.3785 10.7661 12.97L14.9623 13.6037C20.9387 14.4486 24.1601 16.73 24.1601 21.5884C24.1601 27.2918 20.2606 30.9251 12.08 30.9251C3.89952 30.9251 0 27.3763 0 20.9547H4.53532C5.00156 25.3062 6.909 27.3763 12.1649 27.3763C17.336 27.3763 19.4553 25.2217 19.4553 21.8842C19.4553 19.6873 18.226 18.1241 13.4364 17.4481L9.24022 16.8144C3.00945 15.9272 0.762957 13.6881 0.762957 9.12539C0.762979 3.76 4.45056 9.42152e-06 12.08 0ZM138.942 0.422515V18.7156C138.942 24.8837 141.358 27.0806 146.826 27.0806C152.294 27.0806 154.71 24.8837 154.71 18.7156V0.422515H159.414V19.1381C159.414 26.9116 155.473 30.9251 146.826 30.9251C138.179 30.9251 134.237 26.9116 134.237 19.1381V0.422515H138.942ZM49.9074 4.26698H40.4977V30.5026H35.7928V4.26698H26.4254V0.422515H49.9074V4.26698ZM76.671 30.5026H71.7966L69.1687 23.5741H55.3507L52.6804 30.5026H47.8484L59.3774 0.422515H65.142L76.671 30.5026ZM94.5239 0.422515C100.755 0.422523 104.188 3.67552 104.188 8.91419C104.188 12.7587 102.323 15.3358 98.8049 16.3497C102.069 17.1102 103.764 19.3493 103.764 22.6446V27.4609C103.764 28.7282 103.934 29.7844 104.188 30.5026H99.7374C99.3678 29.725 99.0777 28.8284 99.06 27.5825L99.0592 27.4609V22.8136C99.0592 18.9692 96.6432 17.9551 93.4218 17.9551H85.4955V30.5026H80.7908V0.422515H94.5239ZM130.257 4.26698H120.848V30.5026H116.143V4.26698H106.775V0.422515H130.257V4.26698ZM183.807 9.84368C183.807 5.91467 181.56 3.97121 177.364 3.97121H169.819V15.6737H177.364C181.495 15.6737 183.736 13.8316 183.805 10.0263L183.807 9.84368ZM56.5376 19.9407H67.9818L62.2596 4.77395L56.5376 19.9407ZM85.4955 14.4063H94.0152C97.8723 14.4063 99.4831 12.3363 99.4831 9.20996C99.4831 6.08366 97.8724 3.97121 94.0152 3.97121H85.4955V14.4063ZM188.511 9.98665C188.448 16.0201 184.392 19.2226 178 19.2226H169.819V30.5026H165.114V0.422515H178C184.442 0.422515 188.512 3.71781 188.512 9.84368L188.511 9.98665Z" fill="#0A0024"/>
                </svg>
        
                <h2 className="text-[#0A0024] font-tango text-[1.578vw] font-normal leading-[90%]">
                  Your Startup’s Next Big Leap Starts Here
                </h2>
        
                <div className="font-Sans text-[#0A0024] text-[1.1vw] max-md:text-[3vw] ">
                  This is your chance to pitch your ideas, connect with top investors, VCs, Incubators, Accelerators, industry leaders and startups across India, and unlock limitless growth possibilities.
                </div>
        
                {/* BUTTONS */}
                <div className="flex gap-[1.05vw] mt-[0.53vw]">
                  {/* NEED A PASS */}
                    <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.99vw] max-md:gap-[0.79vw] bg-[#0A0024] px-[1.58vw]  min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
                        <span className="text-[#FFFFFF] font-tango font-semibold max-md:text-[2vw]">Ready to Scale Up?</span>
                        <img src={sexpobtn} alt="" className="min-h-[3.42vw] max-md:h-[3vh]" />
                    </a>
                    {/* KNOW MORE */}
                    <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[1.05vw] bg-[#E3983A] px-[1.58vw] py-[0.79vw] min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
                        <span className="text-[#2F2F2F] font-extrabold max-md:text-[2vw]">KNOW MORE</span>
            
                        <span className="w-[2.1vw] h-[2.1vw] rounded-[0.53vw] border-[0.13vw] border-[#032D29] flex items-center justify-center flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="0.85vw"
                                height="0.85vw"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                d="M3 12h18M15 5l7 7-7 7"
                                stroke="#032D29"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ strokeWidth: "0.2vw" }}
                                />
                            </svg>
                        </span>
                    </a>
                </div>
              </div>
        

              <div className="w-[40%] max-md:w-[20%] flex flex-row max-md:flex-col gap-x-[1.19vw] max-md:gap-y-[2.49vw] max-md:items-center">
                <div id="sexpo-col1" className='w-[10.652vw] h-[22.883vw] rounded-[1.578vw] bg-[#0A0024]'>
                    <img src={sexpolong} alt="" />
                </div>
                <div id="sexpo-col2" className="flex flex-col items-center justify-center gap-y-[2.49vw]">
                    
                    <div id="sexpo-star-container" className='rounded-[1.644vw] bg-[#0A0024] pt-[0.159vw] pb-0 pl-0 w-[10.652vw] h-[10.324vw] flex flex-col items-end justify-center max-md:h-full max-md:w-full'>
                        <img src={sexpostar} alt="" />
                    </div>


                    <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#1B46F4] flex flex-col justify-between max-md:justify-center p-[1.58vw] text-[#FEFBF1] font-['Inter'] h-full">

                        <div className="text-[2.63vw] max-md:text-[4vw] font-extrabold lg:tracking-[0.2em] text-left leading-none lg:uppercase">
                            Jan
                        </div>
            
                        <div className="flex justify-end items-start leading-none">
                            <span className="text-[3.42vw] max-md:text-[4vw] font-extrabold">25</span>
                            <span className="text-[1.18vw] max-md:text-[2.4vw] font-bold mt-[0.26vw] ml-[0.26vw]">th</span>
                        </div>
            
                        <div className="text-[1.18vw] max-md:text-[2.5vw] font-semibold lg:tracking-[0.15em] text-center leading-none lg:uppercase">
                            Sunday
                        </div>
            
                    </div>
                </div>
        
                
        
        
              </div>
        </div>
    )
}