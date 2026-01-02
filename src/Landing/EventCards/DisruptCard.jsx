import disrupt00 from "/disrupt00.svg";
import disrupt01 from "/disrupt01.svg";
import disrupt10 from "/disrupt10.svg";


export default function DisruptCard ({ regLink, passLink }){
  return (
    <div className="w-full h-full flex flex-row items-center justify-center max-md:justify-between gap-x-[3vw] p-[2.63vw] max-md:p-[4vw] bg-[#070C17] rounded-[2.1vw] border-[0.065vw] border-[#FFF9F0]">
      
      {/* LEFT CONTENT */}
      <div className="w-[55%] max-md:w-[70%] flex flex-col gap-[1.58vw]">
        <h1 className="font-['Creato_Display'] text-[#FEFBF1] text-[4.74vw] max-md:text-[8vw] font-black self-start">
          DISRUPT
        </h1>

        <h2 className="font-['Creato_Display'] text-[#D9FE78] text-[2.1vw] font-semibold">
          Pitch Ideas, Win Investments
        </h2>

        <div className="font-['Inter'] text-[#FEFBF1] text-[1.1vw] max-md:text-[3vw] ">
          Disrupt Is North-East India's Largest Pitching Battle, Offering Startups The Opportunity To Pitch Ideas Investors, VCs and Angels. Finalist Receive Mentorship, Tools, Prizes With Winner Securing Investments To Scale Their Ventures
        </div>

        {/* BUTTONS */}
        <div className="flex gap-[1.05vw] mt-[0.53vw]">
          {/* NEED A PASS */}
        <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.79vw] bg-[#D9FE78] px-[1.58vw] py-[0.79vw] min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
            <span className="text-[#2F2F2F] font-['Inter'] font-semibold max-md:text-[2vw]">REGISTER</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.85vw"
            height="0.85vw"
            viewBox="0 0 13 13"
            fill="none"
            >
                <path
                    d="M12.6022 0.938232C12.6022 0.420103 12.1822 7.76841e-05 11.6641 7.86956e-05L3.22068 7.84427e-05C2.70256 7.81055e-05 2.28253 0.420104 2.28253 0.938232C2.28253 1.45636 2.70256 1.87638 3.22068 1.87638H10.7259V9.38161C10.7259 9.89974 11.1459 10.3198 11.6641 10.3198C12.1822 10.3198 12.6022 9.89974 12.6022 9.38161L12.6022 0.938232ZM0.664062 11.9382L1.32744 12.6016L12.3274 1.60161L11.6641 0.938232L11.0007 0.274857L0.000687975 11.2749L0.664062 11.9382Z"
                    fill="#2F2F2F"
                />
            </svg>
        </a>
        {/* KNOW MORE */}
        <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[1.05vw] bg-[#D9FE78] px-[1.58vw] py-[0.79vw] min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
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

      {/* RIGHT 2x2 GRID */}
      <div className="w-[40%] max-md:w-[20%] grid grid-cols-2 grid-rows-2 gap-[1.05vw] max-md:grid-cols-1 max-md:grid-rows-4">
        <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#171C27] flex items-center justify-center p-[1.58vw]">
            <img
            src={disrupt00} 
            alt=""
            className="rotate-0 max-w-none object-cover max-md:w-[160%] h-auto translate-y-[0.79vw]"
            />

        </div>

        <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#171C27] flex items-center justify-center p-[1.58vw]">
          <img
            src={disrupt01} 
            alt=""
            className="rotate-[15deg] max-w-none object-cover max-md:w-[160%] h-auto"
            />
        </div>

        <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#171C27] flex items-center justify-center p-[1.58vw] rotate-[-6deg]">
          <img
            src={disrupt10} 
            alt=""
            className="rotate-[12deg] max-w-none object-cover max-md:w-[200%] h-auto"
            />
        </div>

        <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#1B46F4] flex flex-col justify-between max-md:justify-center p-[1.58vw] text-[#FEFBF1] font-['Inter'] h-full">
  
            <div className="text-[2.63vw] max-md:text-[4vw] font-extrabold lg:tracking-[0.2em] text-left leading-none lg:uppercase">
                Jan
            </div>

            <div className="flex justify-end items-start leading-none">
                <span className="text-[3.42vw] max-md:text-[4vw] font-extrabold">24</span>
                <span className="text-[1.18vw] max-md:text-[2.4vw] font-bold mt-[0.26vw] ml-[0.26vw]">th</span>
            </div>

            <div className="text-[1.18vw] max-md:text-[2.5vw] font-semibold lg:tracking-[0.15em] text-center leading-none lg:uppercase">
                Saturday
            </div>

        </div>


      </div>
    </div>
  );
};