import "../src/assets/events/events.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    // Viewport script for Events page only
    if (window.innerWidth < 1000) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute("content", "width=1000");
      }
    }

    // Cleanup - reset viewport when leaving the page
    return () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0"
        );
      }
    };
  }, []);

  return (
    <div id="Events">
      {/* sidebar starts  */}

      {/* <div id="sidebarOverlay"></div>
      <div id="sidebar">
        <div id="sidebarhead">
          <svg
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="28"
            viewBox="0 0 11 28"
            fill="none"
          >
            <path
              d="M4.78049 8.78768L7.43862 0L10.8889 10.1346L4.78049 8.78768Z"
              fill="#141131"
            />
            <path
              d="M3.71329 22.9522L10.8258 12.9258L6.51244 28L3.71329 22.9522Z"
              fill="#141131"
            />
            <path
              d="M4.02572 10.7023C4.5062 13.0319 4.95981 15.2313 5.44175 17.569L0 14.7641C0.912886 12.8615 1.80439 11.0033 2.76693 8.99517C2.98187 9.92952 3.16098 10.7091 3.34387 11.5057L3.49434 12.1611L4.02572 10.7023Z"
              fill="#141131"
            />
            <path
              d="M4.86651 10.0059L10.7908 11.285L6.40331 17.5343C6.20042 16.5405 6.00226 15.5697 5.80517 14.6038C5.49458 13.0819 5.18653 11.5725 4.86651 10.0059Z"
              fill="#141131"
            />
            <path
              d="M5.38652 18.869L3.23197 21.9678C2.88968 21.3187 2.55304 20.6799 2.22014 20.0483C1.53694 18.752 0.869637 17.4859 0.202261 16.2226L5.38652 18.869Z"
              fill="#141131"
            />
          </svg>
          <svg
            id="svg2"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M14.781 13.7198C14.8507 13.7895 14.906 13.8722 14.9437 13.9632C14.9814 14.0543 15.0008 14.1519 15.0008 14.2504C15.0008 14.349 14.9814 14.4465 14.9437 14.5376C14.906 14.6286 14.8507 14.7114 14.781 14.781C14.7114 14.8507 14.6286 14.906 14.5376 14.9437C14.4465 14.9814 14.349 15.0008 14.2504 15.0008C14.1519 15.0008 14.0543 14.9814 13.9632 14.9437C13.8722 14.906 13.7895 14.8507 13.7198 14.781L7.50042 8.56073L1.28104 14.781C1.14031 14.9218 0.94944 15.0008 0.750417 15.0008C0.551394 15.0008 0.360523 14.9218 0.219792 14.781C0.0790615 14.6403 3.92322e-09 14.4494 0 14.2504C-3.92322e-09 14.0514 0.0790615 13.8605 0.219792 13.7198L6.4401 7.50042L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360523 0.219792 0.219792C0.360523 0.0790615 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790615 1.28104 0.219792L7.50042 6.4401L13.7198 0.219792C13.8605 0.0790615 14.0514 -3.92322e-09 14.2504 0C14.4494 3.92322e-09 14.6403 0.0790615 14.781 0.219792C14.9218 0.360523 15.0008 0.551394 15.0008 0.750417C15.0008 0.94944 14.9218 1.14031 14.781 1.28104L8.56073 7.50042L14.781 13.7198Z"
              fill="#141131"
            />
          </svg>
        </div>
        <div id="sidebarLinks">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div id="navpass2">Get Pass</div>
      </div> */}

      {/* navbar starts  */}

      {/* <section id="navbar">
        <div id="navcontainer">
          <div id="navicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="51"
              viewBox="0 0 18 51"
              fill="none"
            >
              <path
                d="M7.90244 16.0061L12.2965 0L18 18.4594L7.90244 16.0061Z"
                fill="#FFF9F0"
              />
              <path
                d="M6.1383 41.8058L17.8958 23.5434L10.7655 51L6.1383 41.8058Z"
                fill="#FFF9F0"
              />
              <path
                d="M6.65476 19.4935C7.44902 23.7367 8.19886 27.7427 8.99554 32.0008L0 26.8918C1.50906 23.4263 2.98277 20.0417 4.5739 16.3841C4.92921 18.0859 5.22529 19.5058 5.52761 20.9567L5.77635 22.1506L6.65476 19.4935Z"
                fill="#FFF9F0"
              />
              <path
                d="M8.04464 18.225L17.8379 20.5549L10.5851 31.9374C10.2497 30.1274 9.92211 28.359 9.59631 26.5998C9.08287 23.8278 8.57365 21.0785 8.04464 18.225Z"
                fill="#FFF9F0"
              />
              <path
                d="M8.90425 34.3686L5.34264 40.0128C4.77682 38.8305 4.22032 37.667 3.67003 36.5165C2.54065 34.1554 1.43756 31.8492 0.33435 29.5483L8.90425 34.3686Z"
                fill="#FFF9F0"
              />
            </svg>
          </div>
          <div id="navlink">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div id="navpass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="49"
              viewBox="0 0 3 49"
              fill="none"
            >
              <path
                d="M1.02246 1.02344L1.02246 47.0387"
                stroke="#2B2844"
                stroke-width="2.04529"
                stroke-linecap="square"
                stroke-dasharray="4.09 4.09"
              />
            </svg>
            Get Pass
          </div>
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section> */}

      <section id="slides">
        {/* disrupt starts  */}

        <section id="disrupt" className="box">
          <h1>DISRUPT</h1>
          <h2>Pitch Ideas, Win Investments</h2>
          <h3>
            Disrupt is North-East India’s largest startup pitching arena, built around a 4-month-long intensive bootcamp where selected startups receive mentorship, resources, and guided support to refine their ideas. The journey culminates in a grand pitching finale at UDGAM, where founders present to leading investors, VCs, and angel networks. Finalists gain visibility, tools, and opportunities to secure investments and scale their ventures.
          </h3>
          <svg
            id="di1"
            xmlns="http://www.w3.org/2000/svg"
            width="144"
            height="144"
            viewBox="0 0 144 144"
            fill="none"
          >
            <path
              d="M51.6766 35.4036C49.779 31.7933 47.425 28.578 44.7232 25.7908C20.7028 39.8453 11.595 70.2647 24.1686 95.2793C27.5889 94.4929 30.9653 93.259 34.2181 91.5494C54.5434 80.8662 62.3598 55.7289 51.6766 35.4036ZM91.0837 111.479C80.4004 91.1544 55.263 83.3378 34.9378 94.0208C31.8953 95.62 29.1352 97.5455 26.6736 99.7281C40.879 122.35 69.9485 130.928 94.2536 119.36C93.4831 116.682 92.4308 114.042 91.0837 111.479ZM118.227 46.4941C118.931 47.845 119.574 49.211 120.154 50.5905C116.965 51.3806 113.818 52.5604 110.78 54.1572C90.4553 64.8404 82.6388 89.9779 93.3217 110.303C94.669 112.866 96.2489 115.229 98.0178 117.382C122.537 103.242 131.702 72.1264 118.417 46.8502C118.354 46.7312 118.291 46.6125 118.227 46.4941ZM118.014 46.0988C104.651 21.6207 74.6554 11.7953 49.5105 23.3021C50.2739 27.1004 51.581 30.8556 53.4747 34.4585C64.1578 54.7837 89.2953 62.6 109.62 51.9171C112.715 50.2903 115.52 48.3278 118.014 46.0988Z"
              fill="#9C39EE"
            />
          </svg>
          <div id="di2">
            <p>Saturday</p>
            <p>
              <span>23rd</span> Jan
            </p>
          </div>
          <div id="di3">
            <a
              href="https://unstop.com/competitions/disrupt26-the-ultimate-startup-bootcamp-iit-guwahati-1545893"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="di31">
                Register NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M19.7029 43.3459L42.6895 20.3594"
                    stroke="black"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="black"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.ecelliitg.in/Disrupt/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="di32">
                <p>Know</p>
                <p>more</p>
              </div>
            </a>
          </div>
          <svg
            id="di4"
            xmlns="http://www.w3.org/2000/svg"
            width="203"
            height="178"
            viewBox="0 0 203 178"
            fill="none"
          >
            <path
              d="M47.5008 56.1942C57.8887 50.534 69.3151 48.6327 80.2159 50.0298C84.9519 40.1143 92.744 31.5449 103.131 25.8853C129.364 11.5913 162.22 21.2697 176.514 47.5033C190.808 73.7369 181.129 106.592 154.896 120.887C144.507 126.548 133.08 128.448 122.178 127.051C117.442 136.966 109.652 145.535 99.2658 151.195C73.0319 165.489 40.1769 155.811 25.8823 129.577C11.588 103.343 21.2671 70.4888 47.5008 56.1942ZM92.3477 72.2923C77.6774 80.286 69.6732 93.9018 74.4695 102.704C79.2658 111.506 95.0463 112.162 109.717 104.168C124.387 96.1745 132.391 82.5586 127.595 73.7565C122.799 64.9543 107.018 64.2987 92.3477 72.2923Z"
              fill="#D92B45"
            />
          </svg>
        </section>

        {/* INTERFAIR STARTS  */}

        <section id="intern" className="box">
          <h1>INTERNFAIR</h1>
          <h2>Unlock Industry Partnership</h2>
          <h3>
            InternFair is UDGAM’s platform that connects students with leading companies, unlocking valuable internship and networking opportunities across diverse domains. Alongside the main recruitment fair, the Road to InternFair program equips participants with resources, guidance, and project-building support to strengthen their CVs and develop industry-ready skills. It’s the perfect launchpad for students exploring future career paths.
          </h3>
          <div id="in2">
            <p>Saturday</p>
            <p>
              <span>23rd</span> Jan
            </p>
            <img
              src="../src/assets/events/assets/internpin.svg"
              id="in1"
              alt=""
            />
          </div>
          <a
            href="https://road-to-internfair.notion.site/Road-To-Internfair-2026-2b846bf64908816d91b3ca935c70eab5"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div id="in3">
              <div id="in31">Yes, I have my Pass</div>
              <div id="in32">No, I need a Pass</div>
            </div>
          </a>
          <img src="../src/assets/events/assets/hired.svg" id="in4" alt="" />
          <img
            src="../src/assets/events/assets/interntie.svg"
            id="in5"
            alt=""
          />
          <img src="../src/assets/events/assets/redpin.svg" id="in6" alt="" />
          <img
            src="../src/assets/events/assets/yellowpin.svg"
            id="in7"
            alt=""
          />
          <div id="in8">Are you ready to enter?</div>
        </section>

        {/* <!-- expo starts  --> */}

        <section id="expo" className="box">
          <div id="exbg">
            <img
              src="../src/assets/events/assets/sexpobg.svg"
              id="exbbg"
              alt=""
            />

            <picture>
              <source
                media="(max-width: 1000px)"
                srcSet="../src/assets/events/assets/exporange.svg"
              />
              <img
                src="../src/assets/events/assets/sexporange.svg"
                id="exor"
                alt="Description"
              />
            </picture>
            <img
              src="../src/assets/events/assets/expowrite.svg"
              id="exwr"
              alt=""
            />
            <p>
              Start-Up Expo is UDGAM’s premier platform where startups showcase their innovations and connect with investors, VCs, incubators, and government leaders from across India. Designed for visibility and growth, the Expo helps founders network, gain feedback, and discover opportunities to elevate their ventures to the next level.
            </p>
          </div>
          <div id="ex2">
            <p>Sat-Sun</p>
            <p>23rd-24th</p>
            <img
              src="../src/assets/events/assets/expodiamond.svg"
              id="ex3"
              alt=""
            />
          </div>
          <div id="ex4">
            <a
              href="https://unstop.com/competitions/startup-expo-udgam-2026-iit-guwahati-1581666"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="ex41">
                Register NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M19.7029 43.3459L42.6895 20.3594"
                    stroke="#EF9539"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#EF9539"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* <!-- pmx starts  --> */}

        <section className="box" id="pmx">
          <div id="pmxh">
            <h1>PMx</h1>
            <h2>PRODUCT MANAGEMENT EXPEDITION</h2>
            <h3>
              PMx is India’s largest product management expedition, bringing together thousands of problem-solvers, designers, and innovators to tackle real-world product case studies. Participants dive into live industry problems, analyze user needs, design solutions, and showcase their product-thinking skills. Perfect for anyone who loves solving complex challenges, PMx offers a high-impact platform to learn, compete, and shine in the world of product management.
            </h3>
          </div>
          <img src="../src/assets/events/assets/pmx1.svg" id="pmx1" alt="" />
          <div id="pmx2">
            <p>Saturday</p>
            <p>
              <span>23rd</span> Jan
            </p>
          </div>
          <div id="pmx3">
            <a
              href="https://unstop.com/competitions/pmx-2026-the-product-management-expedition-udgam-2026-iit-guwahati-1602663"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="pmx31">
                Register NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M19.7029 43.3459L42.6895 20.3594"
                    stroke="#EE3B3F"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#EE3B3F"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img src="../src/assets/events/assets/pmx2.png" id="pmx4" alt="" />
        </section>

        {/* <!-- sparkle starts  --> */}

        <section className="box" id="spk">
          <div id="spkh">
            <h1>SPARKLE</h1>
            <h2>The Student Startup Bootcamp</h2>
            <h3>
              Sparkle is UDGAM’s dedicated platform for school students (Classes 6–12) to explore entrepreneurship, creativity, and problem-solving. It encourages young innovators to think boldly, develop ideas, and present solutions through guided events, activities, and competitions. Designed as a launchpad for budding leaders, Sparkle helps students transform their imagination into real, impactful concepts.
            </h3>
          </div>
          <div id="spk2">
            <p>Saturday</p>
            <p>
              <span>23rd</span> Jan
            </p>
          </div>
          <div id="spk3">
            <a
              href="https://unstop.com/competitions/sparkle-ascend-2026-udgam-2026-iit-guwahati-1603606?lb=h62eJ0a"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="spk31">
                Register NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M19.7029 43.3459L42.6895 20.3594"
                    stroke="#FFF9F0"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#FFF9F0"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img src="../src/assets/events/assets/spkimg1.svg" id="spk4" alt="" />
          <img src="../src/assets/events/assets/spkimg2.svg" id="spk5" alt="" />
        </section>

        {/* <!-- footer starts  --> */}

        {/* <footer>
          <div id="f1">
            <div id="f11">
              <img src="../src/assets/events/assets/E-CellLogo.svg" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="362"
                height="61"
                viewBox="0 0 362 61"
                fill="none"
              >
                <path
                  d="M361.001 26.9724H334.52V18.5487C334.52 13.7767 338.184 10.54 343.222 10.54H352.424C353.423 10.54 354.089 9.83454 354.089 8.71415C354.089 7.59376 353.423 6.92982 352.424 6.92982H342.805C338.965 6.92982 335.852 3.82723 335.852 2.12931e-07H352.715C357.795 2.12931e-07 361.417 3.31967 361.417 8.1747C361.417 13.0712 357.753 16.3079 352.715 16.3079H343.472C342.472 16.3079 341.806 16.8888 341.806 17.9677V20.001H361.001V26.9724Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M352.507 60.5383H347.261C338.933 60.5383 333.895 55.4343 333.895 47.5086C333.895 38.836 339.974 33.566 348.218 33.566H360.876V40.4958H347.719C344.346 40.4958 342.223 41.6992 341.348 44.1889H354.006C359.585 44.1889 362 47.1766 362 51.8242C362 56.9282 359.127 60.5383 352.507 60.5383ZM352.59 49.5004H341.182C341.889 52.2391 344.013 53.567 347.594 53.567H352.424C353.839 53.567 354.464 52.8201 354.464 51.4507C354.464 50.1228 353.839 49.5004 352.59 49.5004Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M12.9216 34.6038C12.9216 38.0454 14.283 41.346 16.7063 43.7796C19.1295 46.2131 22.4163 47.5803 25.8433 47.5803C29.2703 47.5803 32.557 46.2131 34.9803 43.7796C37.4036 41.346 38.7649 38.0454 38.7649 34.6038V2.12931e-07C45.9013 2.12931e-07 51.6866 5.80975 51.6866 12.9764V34.6038C51.6866 41.4869 48.9638 48.0882 44.1172 52.9553C39.2707 57.8224 32.6973 60.5567 25.8433 60.5567C18.9892 60.5567 12.4159 57.8224 7.56934 52.9553C2.72278 48.0882 1.03493e-06 41.4869 0 34.6038V2.12931e-07H12.9216V34.6038Z"
                  fill="#FFF9F0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M81.6648 2.12931e-07C85.6242 3.91257e-08 89.5449 0.783209 93.2029 2.30484C96.8609 3.82647 100.185 6.05673 102.984 8.86833C105.784 11.6799 108.005 15.0178 109.52 18.6913C111.035 22.3648 111.815 26.3021 111.815 30.2783C111.815 34.2546 111.035 38.1919 109.52 41.8654C108.005 45.5389 105.784 48.8768 102.984 51.6884C100.185 54.5 96.8609 56.7302 93.2029 58.2519C91.8032 58.8341 90.3651 59.3082 88.901 59.6717C85.8646 60.4256 82.5615 60.4897 79.813 58.9904C75.7849 56.7931 73.0503 52.5075 73.0503 47.5803V60.5567H60.1287V2.12931e-07H81.6648ZM81.6648 12.9764H73.0503V47.5803H81.6648V47.5814C83.9274 47.5814 86.168 47.1338 88.2584 46.2643C90.3489 45.3947 92.2483 44.1202 93.8482 42.5135C95.4482 40.9067 96.7173 38.9993 97.5832 36.9C98.4491 34.8007 98.8947 32.5506 98.8947 30.2783C98.8947 28.0061 98.4491 25.756 97.5832 23.6567C96.7173 21.5574 95.4482 19.65 93.8482 18.0432C92.2483 16.4365 90.3489 15.162 88.2584 14.2924C86.168 13.4229 83.9274 12.9753 81.6648 12.9753V12.9764Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M143.406 0.581741C148.269 -0.389624 153.295 -0.141584 158.04 1.30372C162.785 2.74921 167.102 5.34739 170.608 8.86824L161.461 18.0538C159.459 16.0435 156.994 14.5598 154.285 13.7346C151.576 12.9094 148.706 12.7678 145.93 13.3223C143.153 13.877 140.555 15.1108 138.367 16.9145C136.178 18.718 134.467 21.0359 133.383 23.6624C132.3 26.2891 131.878 29.1436 132.156 31.9729C132.433 34.8022 133.401 37.5193 134.974 39.8831C136.547 42.2471 138.676 44.1849 141.173 45.5252C143.67 46.8654 145.972 47.5666 149.288 47.5666C152.605 47.5666 158.592 44.812 159.883 41.092H149.288V30.2783H170.824C175.582 30.2783 179.439 34.1515 179.439 38.9293V60.5567H168.671V50.641C167.607 51.7456 166.493 52.8139 165.332 53.8106C161.226 57.3361 155.648 60.6317 149.173 60.5557C144.254 60.5368 139.414 59.3106 135.075 56.9814C130.702 54.6342 126.973 51.2402 124.219 47.1001C121.464 42.9599 119.769 38.2014 119.283 33.2462C118.797 28.2908 119.535 23.2917 121.433 18.6913C123.33 14.0911 126.328 10.0317 130.161 6.87295C133.994 3.71401 138.543 1.55328 143.406 0.581741Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M186.847 13.0001C190.336 13.7983 200.156 12.9765 200.156 25.7635V60.561H186.847V13.0001C186.847 12.9922 186.847 12.9844 186.847 12.9765L186.847 13.0001Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M199.774 0.000505848C203.725 -0.027931 207.729 1.74395 210.407 5.74123L247.135 60.5568H230.682C230.682 60.5568 209.289 28.8942 206.912 25.3473C204.536 21.8004 200.975 15.4276 207.141 14.1376C213.307 12.8475 212.69 12.9765 212.69 12.9765L206.703 11.6788C203.579 11.0249 201.625 9.32249 200.975 6.18543L199.774 0.000505848Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M198.692 6.18543C198.041 9.32304 196.389 11.1624 193.265 11.8158L186.847 12.9765C186.86 5.01239 193.244 0.0476303 199.774 0.000505848L198.692 6.18543Z"
                  fill="#FFF9F0"
                />
                <path
                  d="M252.661 13.0349C252.661 0.780858 267.953 -4.67683 275.619 4.84094L287.19 19.2054L298.594 4.95943C306.244 -4.59674 321.577 0.849291 321.577 13.1229V60.5133H308.655V13.1229L287.22 39.8977L265.583 13.0349V60.5567H252.661V13.0349Z"
                  fill="#FFF9F0"
                />
              </svg>
            </div>
            <div id="f12">
              The largest entrepreneurship summit of Northeast India
            </div>
          </div>
          <div id="f2">
            <div>
              <h1>Address</h1>
              <p>E-Cell, IIT Guwahati Assam - 781039</p>
            </div>
            <div>
              <h1>Email</h1>
              <p>edc@iitg.ac.in udgam@iitg.ac.in</p>
            </div>
            <div id="f3">
              <h1>Follow us</h1>
              <div id="f4">
                <img src="../src/assets/events/assets/insta.svg" alt="" />
                <img src="../src/assets/events/assets/link.svg" alt="" />
                <img src="../src/assets/events/assets/twitter.svg" alt="" />
                <img src="../src/assets/events/assets/face.svg" alt="" />
              </div>
            </div>
          </div>
        </footer> */}
      </section>
    </div>
  );
}
