import { useState } from 'react';

const TestimonialCard = ({ divclassName, textbclassName, imgsrc, testimonial, author }) => {
    return imgsrc ? (
        <div id="TestimonialCard-WithImg" className={`flex flex-col justify-center items-center ${divclassName}`}>
            <div id="Testimonial-Info-Img-Container" className="flex flex-row justify-center items-center mx-[4.27%]">
                <div id="TestimonialInfoContainer" className={`relative flex flex-col justify-center items-center ${textbclassName}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29" fill="none" className="w-[2.37vw] h-[1.91vw] self-start">
                        <path opacity="0.5" d="M27.5906 0.00264174C23.8009 -0.0998231 19.6853 2.77693 19.0202 8.89582L18.9691 9.50094L18.9672 9.51254C18.6053 15.9292 22.9918 24.7025 32.574 28.9209C32.7872 29.0148 33.0268 29.0255 33.2472 28.951C33.4676 28.8765 33.6535 28.722 33.7697 28.5169L35.8729 24.8069C35.9357 24.6961 35.9762 24.5738 35.9922 24.4469C36.0083 24.32 35.9994 24.1912 35.9663 24.0678C35.9332 23.9445 35.8764 23.8291 35.7992 23.7283C35.722 23.6275 35.626 23.5433 35.5167 23.4806C32.2765 21.6208 29.7507 18.7035 28.2311 15.1636C30.4859 14.7576 32.106 13.8045 33.1917 12.5343C34.4556 11.0534 34.9066 9.24768 34.9066 7.66817C34.9066 3.38785 31.6797 -0.0746902 27.5925 0.00264174M8.64409 0.00264174C4.8544 -0.0998231 0.738811 2.77693 0.0737228 8.89582L0.0225601 9.50094L0.0206642 9.51254C-0.341251 15.9292 4.04531 24.7025 13.6275 28.9209C13.8407 29.0148 14.0803 29.0255 14.3007 28.951C14.5211 28.8765 14.707 28.722 14.8232 28.5169L16.9264 24.8069C16.9891 24.6961 17.0297 24.5738 17.0457 24.4469C17.0617 24.32 17.0529 24.1912 17.0198 24.0678C16.9867 23.9445 16.9299 23.8291 16.8527 23.7283C16.7755 23.6275 16.6795 23.5433 16.5702 23.4806C13.33 21.6208 10.8042 18.7035 9.28454 15.1636C11.5394 14.7576 13.1595 13.8045 14.2452 12.5343C15.5091 11.0534 15.9601 9.24768 15.9601 7.66817C15.9601 3.38785 12.7294 -0.0746902 8.64409 0.00264174Z" fill="black"/>
                    </svg>
                    <div id="TestimonialInfo" className="pr-[0.2vw]">
                        {testimonial}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29" fill="none" className="w-[2.37vw] h-[1.91vw] self-end">
                        <path opacity="0.5" d="M8.4094 0.00264174C12.1991 -0.0998231 16.3147 2.77693 16.9798 8.89582L17.0309 9.50094L17.0328 9.51254C17.3947 15.9292 13.0082 24.7025 3.42597 28.9209C3.21277 29.0148 2.97322 29.0255 2.75281 28.951C2.5324 28.8765 2.34647 28.722 2.23032 28.5169L0.127051 24.8069C0.0643411 24.6961 0.0237987 24.5738 0.00777298 24.4469C-0.00825274 24.32 0.000557051 24.1912 0.0336917 24.0678C0.0668262 23.9445 0.123627 23.8291 0.200802 23.7283C0.277977 23.6275 0.373991 23.5433 0.483281 23.4806C3.72346 21.6208 6.24928 18.7035 7.76894 15.1636C5.51408 14.7576 3.89399 13.8045 2.80825 12.5343C1.54439 11.0534 1.09342 9.24768 1.09342 7.66817C1.09342 3.38785 4.32033 -0.0746902 8.40751 0.00264174M27.3559 0.00264174C31.1456 -0.0998231 35.2612 2.77693 35.9263 8.89582L35.9774 9.50094L35.9793 9.51254C36.3413 15.9292 31.9547 24.7025 22.3725 28.9209C22.1593 29.0148 21.9197 29.0255 21.6993 28.951C21.4789 28.8765 21.293 28.722 21.1768 28.5169L19.0736 24.8069C19.0109 24.6961 18.9703 24.5738 18.9543 24.4469C18.9383 24.32 18.9471 24.1912 18.9802 24.0678C19.0133 23.9445 19.0701 23.8291 19.1473 23.7283C19.2245 23.6275 19.3205 23.5433 19.4298 23.4806C22.67 21.6208 25.1958 18.7035 26.7155 15.1636C24.4606 14.7576 22.8405 13.8045 21.7548 12.5343C20.4909 11.0534 20.0399 9.24768 20.0399 7.66817C20.0399 3.38785 23.2706 -0.0746902 27.3559 0.00264174Z" fill="black"/>
                    </svg>
                </div>
                <div id="Img-container" className="w-[10.72vw] h-[11.57vw] aspect-[163/176] rounded-[2.3vw] border border-black">
                    <img src={imgsrc} alt={author} className="w-[10.72vw] h-[11.57vw] aspect-[163/176] rounded-[2.3vw] border border-black" />
                </div>
            </div>
            <div id="TestimonialAuthor" className="text-black font-['Inter'] text-[1.05vw] not-italic font-bold leading-[normal] self-start ml-[2.37vw]">
                 {author}
            </div>
        </div>
    ) : (
        <div id="TestimonialCard-NoImg" className={`flex flex-col justify-center items-center ${divclassName}`}>
            <div id="TestimonialInfoContainer" className={`relative flex flex-col justify-center items-center mx-[2.3vw] ${textbclassName}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29" fill="none" className="w-[2.37vw] h-[1.91vw] self-start">
                    <path opacity="0.5" d="M27.5906 0.00264174C23.8009 -0.0998231 19.6853 2.77693 19.0202 8.89582L18.9691 9.50094L18.9672 9.51254C18.6053 15.9292 22.9918 24.7025 32.574 28.9209C32.7872 29.0148 33.0268 29.0255 33.2472 28.951C33.4676 28.8765 33.6535 28.722 33.7697 28.5169L35.8729 24.8069C35.9357 24.6961 35.9762 24.5738 35.9922 24.4469C36.0083 24.32 35.9994 24.1912 35.9663 24.0678C35.9332 23.9445 35.8764 23.8291 35.7992 23.7283C35.722 23.6275 35.626 23.5433 35.5167 23.4806C32.2765 21.6208 29.7507 18.7035 28.2311 15.1636C30.4859 14.7576 32.106 13.8045 33.1917 12.5343C34.4556 11.0534 34.9066 9.24768 34.9066 7.66817C34.9066 3.38785 31.6797 -0.0746902 27.5925 0.00264174M8.64409 0.00264174C4.8544 -0.0998231 0.738811 2.77693 0.0737228 8.89582L0.0225601 9.50094L0.0206642 9.51254C-0.341251 15.9292 4.04531 24.7025 13.6275 28.9209C13.8407 29.0148 14.0803 29.0255 14.3007 28.951C14.5211 28.8765 14.707 28.722 14.8232 28.5169L16.9264 24.8069C16.9891 24.6961 17.0297 24.5738 17.0457 24.4469C17.0617 24.32 17.0529 24.1912 17.0198 24.0678C16.9867 23.9445 16.9299 23.8291 16.8527 23.7283C16.7755 23.6275 16.6795 23.5433 16.5702 23.4806C13.33 21.6208 10.8042 18.7035 9.28454 15.1636C11.5394 14.7576 13.1595 13.8045 14.2452 12.5343C15.5091 11.0534 15.9601 9.24768 15.9601 7.66817C15.9601 3.38785 12.7294 -0.0746902 8.64409 0.00264174Z" fill="black"/>
                </svg>
                <div id="TestimonialInfo">
                    {testimonial}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29" fill="none" className="w-[2.37vw] h-[1.91vw] self-end">
                    <path opacity="0.5" d="M8.4094 0.00264174C12.1991 -0.0998231 16.3147 2.77693 16.9798 8.89582L17.0309 9.50094L17.0328 9.51254C17.3947 15.9292 13.0082 24.7025 3.42597 28.9209C3.21277 29.0148 2.97322 29.0255 2.75281 28.951C2.5324 28.8765 2.34647 28.722 2.23032 28.5169L0.127051 24.8069C0.0643411 24.6961 0.0237987 24.5738 0.00777298 24.4469C-0.00825274 24.32 0.000557051 24.1912 0.0336917 24.0678C0.0668262 23.9445 0.123627 23.8291 0.200802 23.7283C0.277977 23.6275 0.373991 23.5433 0.483281 23.4806C3.72346 21.6208 6.24928 18.7035 7.76894 15.1636C5.51408 14.7576 3.89399 13.8045 2.80825 12.5343C1.54439 11.0534 1.09342 9.24768 1.09342 7.66817C1.09342 3.38785 4.32033 -0.0746902 8.40751 0.00264174M27.3559 0.00264174C31.1456 -0.0998231 35.2612 2.77693 35.9263 8.89582L35.9774 9.50094L35.9793 9.51254C36.3413 15.9292 31.9547 24.7025 22.3725 28.9209C22.1593 29.0148 21.9197 29.0255 21.6993 28.951C21.4789 28.8765 21.293 28.722 21.1768 28.5169L19.0736 24.8069C19.0109 24.6961 18.9703 24.5738 18.9543 24.4469C18.9383 24.32 18.9471 24.1912 18.9802 24.0678C19.0133 23.9445 19.0701 23.8291 19.1473 23.7283C19.2245 23.6275 19.3205 23.5433 19.4298 23.4806C22.67 21.6208 25.1958 18.7035 26.7155 15.1636C24.4606 14.7576 22.8405 13.8045 21.7548 12.5343C20.4909 11.0534 20.0399 9.24768 20.0399 7.66817C20.0399 3.38785 23.2706 -0.0746902 27.3559 0.00264174Z" fill="black"/>
                </svg>
            </div>
            <div id="TestimonialAuthor" className="text-black font-['Inter'] text-[1.05vw] not-italic font-bold leading-[normal] self-start ml-[2.37vw]">
                 {author}
            </div>
        </div>
    );
};

export default function TestimonialsSection() {
    const [showRow1, setShowRow1] = useState(false);
    const [showRow2, setShowRow2] = useState(false);

    return (
        <div id="testimonials" className="w-full h-[110vh] max-md:h-[30vh] flex flex-col justify-center items-center mb-[30vh] max-md:mb-[10vh]">
            <div id="testimonials-title" className="text-[#FFF9F0] font-['Inter'] text-[10.85vw] font-black leading-normal h-[12vw]">
                TESTIMONIALS
            </div>
            
            <div id="testimonial-card-container" className="w-full flex flex-col justify-center items-center relative z=1">
                
                {/* ROW 1 */}
                <div 
                    id="testimonials-r1" 
                    className={`flex flex-row items-center justify-center transition-all duration-1000 ease-out transform ${
                        showRow1 
                        ? "opacity-100 translate-y-0 pointer-events-auto filter-none" 
                        : "opacity-0 translate-y-[5vw] pointer-events-none blur-sm"
                    }`}
                >
                    <TestimonialCard 
                        divclassName="w-[20.38vw] h-[19.33vw] rounded-[1.58vw] border-[1.5px] border-[#101211] bg-[#FFF9F0]"
                        textbclassName="text-black font-['Inter'] text-[1.58vw] not-italic font-black leading-normal"
                        testimonial="Coming Soon ..."
                        author=""
                    />
                    <TestimonialCard 
                        divclassName="w-[37.15vw] h-[19.33vw] rounded-[1.58vw] border-[1.5px] border-[#101211] bg-[#FFF9F0]"
                        textbclassName="text-black font-['Inter'] text-[1.58vw] not-italic font-black leading-normal"
                        testimonial="Coming Soon ..."
                        author=""
                        // imgsrc="/placeholder-testi.png"
                    />
                    <TestimonialCard 
                        divclassName="w-[28.47vw] h-[19.33vw] rounded-[1.58vw] border-[1.5px] border-[#101211] bg-[#FFF9F0]"
                        textbclassName="text-black font-['Inter'] text-[1.58vw] not-italic font-black leading-normal"
                        testimonial="Coming soon ..."
                        author=""
                    />
                </div>

                {/* ROW 2 */}
                <div 
                    id="testimonials-r2" 
                    className={`flex flex-row items-center justify-center transition-all duration-1000 ease-out transform ${
                        showRow2 
                        ? "opacity-100 translate-y-0 pointer-events-auto filter-none" 
                        : "opacity-0 translate-y-[5vw] pointer-events-none blur-sm"
                    }`}
                >
                    <TestimonialCard 
                        divclassName="w-[37.15vw] h-[19.33vw] rounded-[1.58vw] border-[1.5px] border-[#101211] bg-[#FFF9F0]"
                        textbclassName="text-black font-['Inter'] text-[1.58vw] not-italic font-black leading-normal"
                        testimonial="Coming Soon ..."
                        author=""
                    />
                    <TestimonialCard 
                        divclassName="w-[48.86vw] h-[19.33vw] rounded-[1.58vw] border-[1.5px] border-[#101211] bg-[#FFF9F0]"
                        textbclassName="text-black font-['Inter'] text-[1.58vw] not-italic font-black leading-normal pr-[2%]"
                        testimonial="Coming soon ..."
                        author=""
                        // imgsrc="/placeholder-testi.png"
                    />
                </div>

                {/* STAR 1 (Top Right) */}
                <svg 
                    onClick={() => setShowRow1(!showRow1)} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 110 109" 
                    fill="none" 
                    className={`${!showRow1 ? 'star-glow' : ''} w-[6.66vw] h-[6.62vw] absolute right-[31.6vw] top-[-3.05vw] cursor-pointer hover:scale-110 transition-transform duration-300 z-50`}
                >
                    <path d="M54.7773 0C54.7918 6.61632 56.1026 13.1659 58.6348 19.2793C61.1812 25.4269 64.913 31.0136 69.6182 35.7188C74.3232 40.4238 79.9092 44.1557 86.0566 46.7021C92.1707 49.2347 98.7217 50.5444 105.339 50.5586C105.339 50.5959 105.34 50.6336 105.34 50.6709C105.34 50.7077 105.339 50.7445 105.339 50.7812C98.7219 50.7955 92.1716 52.1062 86.0576 54.6387C79.91 57.1851 74.3233 60.9169 69.6182 65.6221C64.9131 70.3271 61.1812 75.9131 58.6348 82.0605C56.1948 87.9511 54.8901 94.2472 54.7852 100.617C54.6409 94.2637 53.1129 87.6849 50.6914 81.8389C48.145 75.6913 44.4122 70.1055 39.707 65.4004C35.0019 60.6953 29.4161 56.9624 23.2686 54.416C17.1586 51.8852 10.6125 50.5755 4 50.5596V50.5586C10.6135 50.543 17.1607 49.2333 23.2715 46.7021C29.4189 44.1557 35.0049 40.4238 39.71 35.7188C44.4151 31.0136 48.1469 25.4269 50.6934 19.2793C53.2256 13.1659 54.5353 6.61631 54.5498 0C54.5858 0 54.7414 -7.4972e-05 54.7773 0Z" fill="#8D42FD"/>
                </svg>

                {/* STAR 2 (Bottom Left) */}
                <svg 
                    onClick={() => setShowRow2(!showRow2)} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 110 109" 
                    fill="none" 
                    className={`${!showRow2 ? 'star-glow' : ''} w-[6.66vw] h-[6.62vw] absolute left-[23.55vw] top-[16.25vw] cursor-pointer hover:scale-110 transition-transform duration-300 z-50`}
                >
                    <path d="M54.7773 0C54.7918 6.61632 56.1026 13.1659 58.6348 19.2793C61.1812 25.4269 64.913 31.0136 69.6182 35.7188C74.3232 40.4238 79.9092 44.1557 86.0566 46.7021C92.1707 49.2347 98.7217 50.5444 105.339 50.5586C105.339 50.5959 105.34 50.6336 105.34 50.6709C105.34 50.7077 105.339 50.7445 105.339 50.7812C98.7219 50.7955 92.1716 52.1062 86.0576 54.6387C79.91 57.1851 74.3233 60.9169 69.6182 65.6221C64.9131 70.3271 61.1812 75.9131 58.6348 82.0605C56.1948 87.9511 54.8901 94.2472 54.7852 100.617C54.6409 94.2637 53.1129 87.6849 50.6914 81.8389C48.145 75.6913 44.4122 70.1055 39.707 65.4004C35.0019 60.6953 29.4161 56.9624 23.2686 54.416C17.1586 51.8852 10.6125 50.5755 4 50.5596V50.5586C10.6135 50.543 17.1607 49.2333 23.2715 46.7021C29.4189 44.1557 35.0049 40.4238 39.71 35.7188C44.4151 31.0136 48.1469 25.4269 50.6934 19.2793C53.2256 13.1659 54.5353 6.61631 54.5498 0C54.5858 0 54.7414 -7.4972e-05 54.7773 0Z" fill="#8D42FD"/>
                </svg>
            </div>
        </div>
    );
}