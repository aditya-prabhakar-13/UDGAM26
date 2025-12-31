const speakersData = [
    { 
        id: 1, 
        name: "Jeff maggioncalda", 
        role: "Former CEO, Coursera", 
        img: "https://www.reuters.com/resizer/v2/RWVA62UXF5OHZA3CSTEME7CDFQ.jpg?auth=a95b5bcfe3cd7bd8d32bb9bf0a07cf5bba7f6edb6cffc1552c22d349581c0347&width=1920&quality=80",
        linkedin: "https://www.linkedin.com/in/jeffmagg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
    },
    { 
        id: 2, 
        name: "Sandeep Jain", 
        role: "Founder & CEO, GeeksforGeeks", 
        img: "https://pbs.twimg.com/profile_images/1383660243587002368/DJQEGX2o_400x400.jpg",
        linkedin: "https://www.linkedin.com/in/sandeep-jain-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { 
        id: 3, 
        name: "Ankur Warikoo", 
        role: "Speaker & Founder, WebVeda", 
        img: "https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/2290434_1658212573.jpg",
        linkedin: "https://www.linkedin.com/in/warikoo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { 
        id: 4, 
        name: "Ashneer Grover", 
        role: "Former Founder/MD/CEO, BharatPe", 
        img: "https://www.deccanchronicle.com/h-upload/2024/09/30/1846777-untitleddesign18.webp",
        linkedin: "https://www.linkedin.com/in/ashneer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { 
        id: 5, 
        name: "Ankit Nagori", 
        role: "Internet Entrepreneur & Investor", 
        img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/659e5fb8d2f80-as-time-rolled-on--the-company-shifted-gears-to-a-thrasio-like-model--snagging-cloud-kitchen-brands-101327484-16x9.jpg?size=948:533",
        linkedin: "https://www.linkedin.com/in/ankitnagori?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { 
        id: 6, 
        name: "Rohit Kapoor", 
        role: "CEO, Food Marketplace, Swiggy", 
        img: "https://img.etimg.com/photo/msid-121583639/rohit.jpg",
        linkedin: "https://www.linkedin.com/in/rohit-kapoor-99a30436?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
];

const infiniteSpeakers = [...speakersData, ...speakersData, ...speakersData];

export default function SpeakersSection() {
    return (
        <div id="speakers" className="w-full min-h-[100vh] max-md:min-h-[60vh] flex flex-col items-center justify-start pt-[30vh] pb-[20vh] relative overflow-hidden">
            <div id="speaker-title" className="text-[#FFF9F0] font-['Inter'] font-black leading-normal text-[10.85vw] w-full flex flex-row justify-center items-center mb-[5vh] relative z-40 h-[0vh]">
                PAST SPEAKERS
            </div>
            
            {/* UPDATED: Increased container height for mobile (max-md:h-[50vw]) */}
            <div className="w-full overflow-hidden relative z-900 h-[33vw] max-md:h-[65vw]">
                <div className="flex w-max animate-marquee pause-on-hover items-end h-full">
                    {infiniteSpeakers.map((speaker, index) => (
                        <div 
                            key={`${speaker.id}-${index}`} 
                            // UPDATED: 
                            // Width: w-[22vw] -> max-md:w-[32vw] (Fits ~3 cards)
                            // Height: h-[30vw] -> max-md:h-[45vw]
                            // Hover: hover:h-[34vw] -> max-md:hover:h-[49vw]
                            className="w-[22vw] max-md:w-[42vw] 
                                /* FIX: Set base height smaller (e.g., 49vw) */
                                h-[30vw] max-md:h-[49vw] 
                                flex-shrink-0 
                                border-[3px] border-[#141131] 
                                rounded-[1.31vw] 
                                flex flex-col items-center justify-end 
                                transition-all duration-300 ease-out 
                                /* FIX: Set hover height larger (e.g., 70vw) */
                                hover:h-[34vw] max-md:hover:h-[70vw] 
                                hover:z-900 relative group"
                            >
                            <div className="w-full h-[75%] relative overflow-hidden rounded-[1.31vw] border border-[#000] aspect-[369/353]">
                                <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>
                            
                            {/* UPDATED: Info box width adjusted for mobile */}
                            <div className="w-[22.04vw] max-md:w-[42vw] h-[20%] rounded-[1.25vw] border-[0.999px] border-[#141131] bg-[#FFF9F0] flex flex-row items-center justify-between px-4">
                                <div className="flex flex-col text-left">
                                    {/* UPDATED: Larger text for mobile */}
                                    <span className="text-[#8D42FD] font-['Inter'] font-extrabold text-[1.4vw] max-md:text-[3vw] leading-tight">
                                        {speaker.name}
                                    </span>
                                    <span className="text-[#141131] font-['Inter'] font-medium text-[0.9vw] max-md:text-[2vw]">
                                        {speaker.role}
                                    </span>
                                </div>
                                <a 
                                    href={speaker.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[#141131] hover:text-[#0077b5] transition-colors cursor-pointer"
                                    onClick={(e) => e.stopPropagation()} 
                                >
                                    {/* UPDATED: Larger icon for mobile */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-[2vw] h-[2vw] max-md:w-[4vw] max-md:h-[4vw]">
                                        <path d="M36.9231 -0.210938H3.07692C2.26087 -0.210937 1.47824 0.113237 0.90121 0.690272C0.324175 1.26731 0 2.04993 0 2.86599V36.7121C0 37.5282 0.324175 38.3108 0.90121 38.8879C1.47824 39.4649 2.26087 39.7891 3.07692 39.7891H36.9231C37.7391 39.7891 38.5218 39.4649 39.0988 38.8879C39.6758 38.3108 40 37.5282 40 36.7121V2.86599C40 2.04993 39.6758 1.26731 39.0988 0.690272C38.5218 0.113237 37.7391 -0.210937 36.9231 -0.210938ZM36.9231 36.7121H3.07692V2.86599H36.9231V36.7121ZM13.8462 16.7121V29.0198C13.8462 29.4279 13.6841 29.8192 13.3955 30.1077C13.107 30.3962 12.7157 30.5583 12.3077 30.5583C11.8997 30.5583 11.5084 30.3962 11.2198 30.1077C10.9313 29.8192 10.7692 29.4279 10.7692 29.0198V16.7121C10.7692 16.3041 10.9313 15.9128 11.2198 15.6243C11.5084 15.3358 11.8997 15.1737 12.3077 15.1737C12.7157 15.1737 13.107 15.3358 13.3955 15.6243C13.6841 15.9128 13.8462 16.3041 13.8462 16.7121ZM30.7692 22.0968V29.0198C30.7692 29.4279 30.6071 29.8192 30.3186 30.1077C30.0301 30.3962 29.6388 30.5583 29.2308 30.5583C28.8227 30.5583 28.4314 30.3962 28.1429 30.1077C27.8544 29.8192 27.6923 29.4279 27.6923 29.0198V22.0968C27.6923 21.0767 27.2871 20.0984 26.5658 19.3771C25.8445 18.6558 24.8662 18.2506 23.8462 18.2506C22.8261 18.2506 21.8478 18.6558 21.1265 19.3771C20.4052 20.0984 20 21.0767 20 22.0968V29.0198C20 29.4279 19.8379 29.8192 19.5494 30.1077C19.2609 30.3962 18.8696 30.5583 18.4615 30.5583C18.0535 30.5583 17.6622 30.3962 17.3737 30.1077C17.0852 29.8192 16.9231 29.4279 16.9231 29.0198V16.7121C16.925 16.3353 17.0651 15.9723 17.3169 15.6919C17.5688 15.4116 17.9147 15.2334 18.2892 15.1912C18.6637 15.1489 19.0406 15.2456 19.3485 15.4629C19.6564 15.6802 19.8739 16.0029 19.9596 16.3698C21.0004 15.6638 22.2138 15.2546 23.4695 15.1862C24.7253 15.1178 25.9759 15.3927 27.0872 15.9815C28.1985 16.5702 29.1284 17.4506 29.7771 18.528C30.4258 19.6054 30.7688 20.8391 30.7692 22.0968ZM14.6154 11.3275C14.6154 11.7839 14.48 12.2301 14.2265 12.6096C13.9729 12.9891 13.6125 13.2849 13.1908 13.4596C12.7691 13.6342 12.3051 13.6799 11.8575 13.5909C11.4098 13.5018 10.9986 13.282 10.6759 12.9593C10.3532 12.6366 10.1334 12.2254 10.0443 11.7777C9.9553 11.3301 10.001 10.8661 10.1757 10.4444C10.3503 10.0227 10.6461 9.66232 11.0256 9.40875C11.4051 9.15518 11.8513 9.01983 12.3077 9.01983C12.9197 9.01983 13.5067 9.26296 13.9395 9.69574C14.3723 10.1285 14.6154 10.7155 14.6154 11.3275Z" fill="#141131"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}