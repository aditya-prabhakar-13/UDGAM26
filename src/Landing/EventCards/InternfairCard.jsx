import internTie from "../../assets/events/assets/intern_tie_straight.svg";
import paperclips from "../../assets/events/assets/paperclips_both.svg";
import hired from "../../assets/events/assets/hired.svg";


export default function InternfairCard({ regLink, passLink }){
  return (
    <div className="w-full h-full flex flex-row items-center justify-center max-md:justify-between gap-x-[3vw] p-[2.63vw] bg-[#FFF2E1] max-md:p-[4vw] rounded-[2.1vw] border-[0.26vw] border-[#141131]">
      
      {/* LEFT CONTENT */}
      <div className="w-[55%] max-md:w-[70%] flex flex-col gap-[1.58vw]">
        <h1 className="font-['Creato_Display'] text-[#032D29] text-[4.74vw] max-md:text-[8vw] font-black self-start ">
          INTERNFAIR
        </h1>

        <h2 className="font-['Creato_Display'] text-[#032D29] text-[2.1vw] font-semibold">
          Unlock Industry Partnership
        </h2>

        {/* max-w-xl (576px) converted to 37.89vw to maintain text wrap ratio */}
        <div className="font-['Inter'] text-[#032D29] text-[1.1vw] max-md:text-[3vw] ">
          Internfair is a platform exclusively for IIT Guwahati students,
          offering internships in diverse profiles like Software Development,
          Analytics, and Product Management. It helps students gain industry
          exposure and prepares them for upcoming placements and internships.
        </div>

        {/* BUTTONS */}
        <div className="flex gap-[1.05vw] mt-[0.53vw]">
          {/* NEED A PASS */}
          <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.79vw] bg-[#032D29] px-[1.58vw] py-[0.79vw] min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
            <span className="text-[#FFF2E1] font-['Inter'] max-md:text-[2vw] font-semibold " >NEED A PASS</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.85vw"
            height="0.85vw"
            viewBox="0 0 13 13"
            fill="none"
            >
                <path
                    d="M12.6022 0.938232C12.6022 0.420103 12.1822 7.76841e-05 11.6641 7.86956e-05L3.22068 7.84427e-05C2.70256 7.81055e-05 2.28253 0.420104 2.28253 0.938232C2.28253 1.45636 2.70256 1.87638 3.22068 1.87638H10.7259V9.38161C10.7259 9.89974 11.1459 10.3198 11.6641 10.3198C12.1822 10.3198 12.6022 9.89974 12.6022 9.38161L12.6022 0.938232ZM0.664062 11.9382L1.32744 12.6016L12.3274 1.60161L11.6641 0.938232L11.0007 0.274857L0.000687975 11.2749L0.664062 11.9382Z"
                    fill="#FFF2E1"
                />
            </svg>

          </a>
        {/* KNOW MORE */}
        <a href={regLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[1.05vw] bg-[#FBD03E] px-[1.58vw] py-[0.79vw] min-h-[3.42vw] max-md:h-[3vh] rounded-[0.79vw] hover:scale-105 transition-transform">
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
                    strokeWidth="3" // Usually kept as number for SVG stroke, or can be 0.2vw
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
      <div className="w-[40%] max-md:w-[20%] grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-[1.05vw]">
        <div className="rounded-[1.05vw] bg-[#EFEFEF] flex items-center justify-center p-[1.58vw]">
            <img
            src={internTie} 
            alt=""
            className="rotate-0 max-w-none object-cover max-md:w-[160%] h-auto translate-y-[0.79vw]"
            />

        </div>

        <div className="rounded-[1.05vw] bg-[#EFEFEF] flex items-center justify-center p-[1.58vw]">
          <img
            src={paperclips} 
            alt=""
            className="rotate-[15deg] max-w-none object-cover max-md:w-[300%] h-auto"
            />
        </div>

        <div className="rounded-[1.05vw] bg-[#EFEFEF] flex items-center justify-center p-[1.58vw] rotate-[-6deg]">
          <img
            src={hired} 
            alt=""
            className="rotate-[12deg] max-w-none object-cover max-md:w-[220%] h-auto"
            />
        </div>

        <div className="rounded-[1.05vw] max-md:rounded-[3.5vw] bg-[#FBD03E] flex flex-col justify-between max-md:justify-center p-[1.58vw] text-[#032D29] font-['Inter'] h-full">
  
            <div className="text-[2.63vw] max-md:text-[4vw] font-extrabold lg:tracking-[0.2em] text-left leading-none lg:uppercase">
                Jan
            </div>

            <div className="flex justify-end items-start leading-none">
                <span className="text-[3.42vw] max-md:text-[4vw] font-extrabold">23</span>
                <span className="text-[1.18vw] max-md:text-[2.4vw] font-bold mt-[0.26vw] ml-[0.26vw]">rd</span>
            </div>

            <div className="text-[1.18vw] max-md:text-[2.5vw] font-semibold lg:tracking-[0.15em] text-center leading-none lg:uppercase">
                Saturday
            </div>

        </div>


      </div>
    </div>
  );
};