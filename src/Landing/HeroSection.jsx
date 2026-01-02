import { useState } from 'react';
import GlowStar from '../assets/Components/GlowStar'; 

export default function HeroSection() {
    const [showTrophyImage, setShowTrophyImage] = useState(false);
    const [showDiamond, setShowDiamond] = useState(false);
    const [showTie, setShowTie] = useState(false);
    const [showSubt, setShowSubt] = useState(false);
    
    // NEW: State to toggle logo visibility on mobile click
    const [showMobileLogo, setShowMobileLogo] = useState(false);

    return (
        <div id="Home-Landing" className="bg-[url('/home-bg.png')] bg-cover bg-center h-[100vh] max-md:h-[40vh] w-full flex flex-col justify-center item-center relative overflow-hidden">
            
            {/* --- CLOUDS --- */}
            <div id="top-left-cloud-container" className="absolute left-[-3vw] top-[-4vw]">
                <img src="/cloud-top-left.png" alt="UDGAM26" className="w-[26.317vw] h-[26.499vw]" />
            </div>
            <div id="top-right-cloud-container" className="absolute right-[-5vw] top-[-6vw]">
                <img src="/cloud-top-right.png" alt="UDGAM26" className="w-[29.529vw] h-[29.733vw]" />
            </div>
            <div id="bottom-left-cloud-container1" className="absolute left-[0vw] bottom-[-3.5vw]">
                <img src="/cloud-bottom-left1.png" alt="UDGAM26" className="w-[29.529vw] h-[29.733vw]" />
            </div>
            <div id="bottom-left-cloud-container2" className="absolute left-[18vw] bottom-[-3.5vw]">
                <img src="/cloud-bottom-left2.png" alt="UDGAM26" className="w-[29.529vw] h-[29.733vw]" />
            </div>
            <div id="middle-udgam-cloud-container" className="absolute left-[32vw] top-[5vw]">
                <img src="/cloud-udgam-middle.png" alt="UDGAM26" className="w-[29.529vw] h-[29.733vw] rotate-[-25deg]" />
            </div>
            
            {/* --- BOX STAR (Diamond - Bottom Left) --- */}
            <div 
                id="box-star-container" 
                className="group absolute left-[10.38vw] bottom-[4.4vw] w-[9vw] h-[9vw] z-[50]" 
                onMouseDown={() => setShowDiamond(true)} 
                onMouseUp={() => setShowDiamond(false)} 
                onMouseLeave={() => setShowDiamond(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 126" fill="none" className="absolute left-[0.5vw] w-[8.3vw] h-[8.1vw] stroke-[0.035vw] group-hover:drop-shadow-[0_0_1vw_#FFFFFF] group-hover:stroke-[0.15vw]" id="box-hover-svg">
                    <g opacity="0.5" filter="url(#filter0_d_18_964)">
                        <path d="M5.71338 64.7021L65.2134 5.70215L123.807 62.8643L65.7134 120.202L5.71338 64.7021Z" stroke="#F3F3F3" strokeWidth="0.532827" shapeRendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_18_964" x="9.77516e-05" y="0.000341892" width="129.516" height="125.899" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2.66414"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_964"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_964" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <img src="/diamond-star-group.png" alt="" className="absolute w-[9vw] h-auto object-contain z-10" />
                <img src="/diamond.png" alt="" className={`absolute top-[-0.9vw] w-[9vw] h-auto object-contain transition-opacity duration-300 ease-out ${showDiamond ? "opacity-100" : "opacity-0"}`} />
            </div>

            {/* --- TIE STAR (Line - Far Right) --- */}
            <div 
                id="tie-star-container" 
                className="group absolute top-[18vw] right-[3.5vw] z-[9999] w-[3.5vw] h-[8.5vw]"
                onMouseDown={() => setShowTie(true)} 
                onMouseUp={() => setShowTie(false)} 
                onMouseLeave={() => setShowTie(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 122" fill="none" className="absolute top-[0.4vw] left-[0.5vw] w-[2.5vw] h-auto">
                    <path d="M48.7389 0.101891L15.694 82.2063L0.229275 120.968" stroke="#F3F3F3" strokeWidth="0.5" className="transition-all duration-300 ease-in-out" />
                </svg>
                <img src="/tie-star-group.png" alt="" className="absolute top-0 left-0 w-[3.5vw] h-auto" />
                <img src="/tie.png" alt="" className={`absolute top-0 left-[-0.4vw] w-[3.5vw] h-auto rotate-[20.08deg] transition-opacity duration-300 ease-out ${showTie ? "opacity-60" : "opacity-0"}`} />
            </div>

            {/* --- SUBT STAR (Square - Top Right) --- */}
            <div 
                id="subt-star-container" 
                className="group absolute top-[2.5vw] right-[24vw] z-[9999] w-[8vw] h-[8vw]" 
                onMouseDown={() => setShowSubt(true)} 
                onMouseUp={() => setShowSubt(false)} 
                onMouseLeave={() => setShowSubt(false)}
            >
                <div id="subt-svg-div" className="absolute top-[1.7vw] left-[1.8vw] w-[4.6vw] h-[4.6vw] rotate-[-44.367deg] border-[0.0329vw] border-[#F3F3F3] transition-all duration-300 ease-in-out group-hover:border-[0.15vw] group-hover:drop-shadow-[0_0_1vw_#FFFFFF]"></div>
                <img src="/subt.png" alt="" className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-out ${showSubt ? "opacity-50" : "opacity-0"}`} />
                <img src="/subt-star-group.png" alt="" className="absolute top-0 left-0 w-full h-full object-contain" />
            </div>

            {/* --- TROPHY STAR (Hourglass - Top Left) --- */}
            <div id="trophy-star-container" className="flex flex-col justify-center items-center absolute z-999 left-[11.5vw] top-[5.5vw] w-[9.265vw] h-[10.647vw] rotate-[-24.249deg]" onMouseDown={() => setShowTrophyImage(true)} onMouseUp={() => setShowTrophyImage(false)} onMouseLeave={() => setShowTrophyImage(false)}>
                <img src="/trophy.png" className={`absolute left-[0.75vw] top-[1.1vw] w-[8.1vw] h-[8.2vw] object-contain pointer-events-none z-[1000] rotate-[-0.5deg] transition-opacity duration-600 ease-in ${showTrophyImage ? "opacity-100" : "opacity-0"}`} />
                <img src="/trophy-star-group.png" alt="" className="absolute z-0 top-[0.26vw] left-[0.3vw] w-[13vw] h-[10.5vw] rotate-[23.5deg]" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 178" fill="none" className="absolute z-1 w-[7.796vw] h-[9.241vw] rotate-[24.249deg]">
                    <g opacity="0.5" filter="url(#filter0_d_6_216)">
                        <path d="M94.189 108.528L152.47 138.572L75.6698 173.167L94.189 108.528ZM94.189 108.528L80.1349 77.3282M80.1349 77.3282L111.643 4.6737L4.84258 52.7819L80.1349 77.3282Z" stroke="#F3F3F3" strokeWidth="0.4254" shapeRendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_6_216" x="1.28746e-05" y="-2.38419e-06" width="157.214" height="177.803" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2.127"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_216"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_216" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* --- TITLE CONTAINER --- */}
            <div id="udgam-titlebox-container" className='flex flex-col relative z-999 gap-y-[2.5vw] items-center'>
                
                {/* 1. TITLE SVG */}
                {/* UPDATED: Added onClick to toggle mobile logo visibility */}
                <div 
                    id="udgam-title" 
                    className='relative z-1 flex flex-col gap-y-[3.167vw] cursor-pointer' 
                    onClick={() => setShowMobileLogo(!showMobileLogo)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 878 147" fill="none" 
                        className='w-[45.73vw] h-[7.66vw] max-md:w-[90vw] max-md:h-[15.1vw]'
                    >
                       <path d="M875.576 65.4191H811.349V44.9882C811.349 33.4141 820.236 25.5638 832.455 25.5638H854.773C857.197 25.5638 858.813 23.8528 858.813 21.1354C858.813 18.418 857.197 16.8077 854.773 16.8077H831.445C822.131 16.8077 814.581 9.28263 814.581 5.16447e-07H855.48C867.8 5.16447e-07 876.586 8.05159 876.586 19.827C876.586 31.7031 867.699 39.5534 855.48 39.5534H833.061C830.637 39.5534 829.022 40.9625 829.022 43.5792V48.5108H875.576V65.4191Z" fill="#FFF9F0"/>
                       <path d="M854.975 146.831H842.251C822.054 146.831 809.834 134.451 809.834 115.228C809.834 94.1933 824.578 81.4114 844.574 81.4114H875.273V98.2191H843.362C835.182 98.2191 830.031 101.138 827.911 107.176H858.611C872.143 107.176 878 114.423 878 125.695C878 138.074 871.032 146.831 854.975 146.831ZM855.177 120.059H827.507C829.224 126.702 834.374 129.922 843.059 129.922H854.773C858.207 129.922 859.721 128.111 859.721 124.789C859.721 121.569 858.207 120.059 855.177 120.059Z" fill="#FFF9F0"/>
                       <path d="M31.3403 83.9286C31.3403 92.2758 34.6422 100.281 40.5196 106.184C46.3971 112.086 54.3687 115.402 62.6807 115.402C70.9926 115.402 78.9643 112.086 84.8417 106.184C90.7192 100.281 94.021 92.2758 94.021 83.9286V5.16447e-07C111.33 5.16447e-07 125.361 14.091 125.361 31.4732V83.9286C125.361 100.623 118.757 116.634 107.003 128.438C95.2476 140.243 79.3046 146.875 62.6807 146.875C46.0567 146.875 30.1137 140.243 18.3588 128.438C6.60388 116.634 2.51015e-06 100.623 0 83.9286V5.16447e-07H31.3403V83.9286Z" fill="#FFF9F0"/>
                       <path fillRule="evenodd" clipRule="evenodd" d="M198.071 5.16447e-07C207.674 9.48959e-08 217.183 1.89961 226.056 5.59019C234.928 9.28077 242.989 14.6901 249.78 21.5094C256.57 28.3287 261.957 36.4243 265.632 45.3342C269.307 54.244 271.198 63.7936 271.198 73.4375C271.198 83.0815 269.307 92.6311 265.632 101.541C261.957 110.451 256.57 118.546 249.78 125.366C242.989 132.185 234.928 137.594 226.056 141.285C222.661 142.697 219.173 143.847 215.622 144.729C208.257 146.557 200.246 146.713 193.58 143.076C183.81 137.747 177.177 127.352 177.177 115.402V146.875H145.837V5.16447e-07H198.071ZM198.071 31.4732H177.177V115.402H198.071V115.405C203.559 115.405 208.993 114.319 214.063 112.21C219.133 110.101 223.74 107.01 227.621 103.113C231.501 99.2157 234.58 94.5894 236.68 89.4977C238.78 84.406 239.861 78.9487 239.861 73.4375C239.861 67.9264 238.78 62.4691 236.68 57.3774C234.58 52.2857 231.501 47.6593 227.621 43.7623C223.74 39.8654 219.133 36.7741 214.063 34.665C208.993 32.556 203.559 31.4706 198.071 31.4706V31.4732Z" fill="#FFF9F0"/>
                       <path d="M347.819 1.41096C359.614 -0.945 371.805 -0.3434 383.313 3.16207C394.821 6.66797 405.291 12.9696 413.795 21.5092L391.61 43.7879C386.755 38.9121 380.776 35.3135 374.206 33.312C367.635 31.3106 360.674 30.9671 353.94 32.3121C347.205 33.6575 340.905 36.65 335.597 41.0246C330.289 45.3989 326.137 51.0207 323.51 57.3911C320.882 63.762 319.86 70.6853 320.533 77.5475C321.205 84.4097 323.553 90.9998 327.368 96.733C331.183 102.467 336.347 107.167 342.403 110.417C348.458 113.668 354.041 115.369 362.085 115.369C370.129 115.369 384.65 108.688 387.783 99.6652H362.085V73.4375H414.319C425.858 73.4375 435.213 82.8316 435.213 94.4197V146.875H409.096V122.826C406.517 125.504 403.814 128.096 400.999 130.513C391.041 139.064 377.512 147.057 361.806 146.873C349.876 146.827 338.137 143.853 327.613 138.204C317.008 132.511 307.963 124.279 301.282 114.237C294.601 104.196 290.489 92.6542 289.31 80.6358C288.131 68.617 289.922 56.492 294.525 45.3341C299.126 34.1768 306.398 24.3311 315.694 16.6697C324.99 9.00801 336.024 3.76736 347.819 1.41096Z" fill="#FFF9F0"/>
                       <path d="M453.181 31.5306C461.643 33.4665 485.461 31.4734 485.461 62.4873V146.886H453.181V31.5306C453.181 31.5115 453.181 31.4925 453.181 31.4734L453.181 31.5306Z" fill="#FFF9F0"/>
                       <path d="M484.534 0.00122689C494.117 -0.0677442 503.829 4.22979 510.325 13.9249L599.404 146.875H559.5C559.5 146.875 507.612 70.0804 501.848 61.4777C496.084 52.875 487.447 37.4183 502.402 34.2894C517.358 31.1605 515.862 31.4734 515.862 31.4734L501.341 28.3259C493.765 26.74 489.025 22.6109 487.447 15.0022L484.534 0.00122689Z" fill="#FFF9F0"/>
                       <path d="M481.91 15.0022C480.331 22.6122 476.325 27.0736 468.747 28.6583L453.181 31.4734C453.212 12.1571 468.697 0.115523 484.534 0.00122689L481.91 15.0022Z" fill="#FFF9F0"/>
                       <path d="M612.808 31.6151C612.808 1.8939 649.896 -11.3432 668.49 11.7413L696.554 46.581L724.215 12.0287C742.77 -11.149 779.956 2.05988 779.956 31.8285V146.77H748.616V31.8285L696.629 96.7685L644.148 31.6151V146.875H612.808V31.6151Z" fill="#FFF9F0"/>
                    </svg>

                    {/* 2. SUBTITLE */}
                    <div id="udgam-edition" 
                         className='text-[#FFF9F0] font-inter text-[2.5vw] max-md:text-[5vw] font-black leading-normal self-end pr-[3.28vw] relative z-999'
                    >
                        EDITION XVIII
                    </div>
                </div>

                {/* 3. HOVER STAR GROUP (CLICK-ACTIVATED ON MOBILE) */}
                <div id="udgam-title-star-group" 
                     className='group absolute left-[45.8vw] bottom-[-1.56vw] max-md:left-[52vw] max-md:bottom-[-5vw] z-998 w-[8.65vw] h-[21.56vw] max-md:w-[25vw] max-md:h-[50vw]'
                >
                    {/* VISIBILITY FIX: 
                        - Desktop: 'group-hover:opacity-40' (Standard hover)
                        - Mobile: Controlled by 'showMobileLogo' state via 'max-md:opacity-0' vs 'max-md:opacity-40'
                    */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227 641" fill="none" 
                        className={`absolute top-[-10vw] left-[-2vw] w-[13vw] h-[39vw] 
                            opacity-0 transition-opacity duration-500 ease-in-out 
                            group-hover:opacity-40 
                            max-md:w-[25vw] max-md:h-[45vw] max-md:top-[0vw] max-md:left-[-11.5vw]
                            ${showMobileLogo ? 'max-md:opacity-40' : 'max-md:opacity-0'}
                        `} 
                        id="udgam-hover-logo"
                    >
                        <path d="M99.3228 201.175L154.55 0L226.235 232.009L99.3228 201.175Z" fill="#FFF9F0"/>
                        <path d="M77.15 525.441L224.925 295.908L135.307 641L77.15 525.441Z" fill="#FFF9F0"/>
                        <path d="M83.6412 245.007C93.624 298.338 103.048 348.688 113.062 402.206L0 337.993C18.9668 294.436 37.4893 251.896 57.4877 205.925C61.9535 227.315 65.6747 245.161 69.4745 263.398L72.6009 278.402L83.6412 245.007Z" fill="#FFF9F0"/>
                        <path d="M101.11 229.063L224.198 258.347L133.04 401.409C128.824 378.66 124.707 356.434 120.612 334.323C114.159 299.483 107.759 264.928 101.11 229.063Z" fill="#FFF9F0"/>
                        <path d="M111.914 431.966L67.1497 502.906C60.0381 488.046 53.0437 473.422 46.1272 458.962C31.9325 429.287 18.0682 400.301 4.20233 371.382L111.914 431.966Z" fill="#FFF9F0"/>
                    </svg>
                    
                    <span id="star-container" className='absolute z-998 right-0 top-0'><GlowStar width='3.44vw' height='3.44vw' className="max-md:w-[6vw] max-md:h-[6vw]" /></span>
                    <span id="star-container" className='absolute z-998 left-0 top-[7.24vw]'><GlowStar width='3.44vw' height='3.44vw' className="max-md:w-[6vw] max-md:h-[6vw]" /></span>
                    <span id="star-container A-STAR" className='absolute z-998 right-[0.83vw] top-[5.37vw]'><GlowStar width='3.44vw' height='3.44vw' className="max-md:w-[6vw] max-md:h-[6vw]" /></span>
                    <span id="star-container" className='absolute z-998 left-0 bottom-[20%]'><GlowStar width='3.44vw' height='3.44vw' className="max-md:w-[6vw] max-md:h-[6vw]" /></span>
                    <span id="star-container" className='absolute z-998 right-[12%] bottom-0'><GlowStar width='3.44vw' height='3.44vw' className="max-md:w-[6vw] max-md:h-[6vw]" /></span>
                </div>
            </div>
        </div>
    );
}