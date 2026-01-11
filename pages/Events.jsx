import "../src/assets/events/events.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// --- Image Imports ---
import internPin from "../src/assets/events/assets/interpin.svg";
import hired from "../src/assets/events/assets/hired.svg";
import internTie from "../src/assets/events/assets/interntie.svg";
import redPin from "../src/assets/events/assets/redpin.svg";
import yellowPin from "../src/assets/events/assets/yellowpin.svg";
import sexpoBg from "../src/assets/events/assets/sexpobg.svg";
import exporange from "../src/assets/events/assets/exporange.svg";
import sexporange from "../src/assets/events/assets/sexporange.svg";
import expoWrite from "../src/assets/events/assets/expowrite.svg";
import expoDiamond from "../src/assets/events/assets/sexpodiamond.svg";
import pmx1 from "../src/assets/events/assets/pmx1.svg";
import pmx2 from "../src/assets/events/assets/pmx2.png";
import spkImg1 from "../src/assets/events/assets/spkimg1.svg";
import spkImg2 from "../src/assets/events/assets/spkimg2.svg";
import encw from "/encode_write.svg";
import enca from "/encode_arrow.svg";
import encm from "/encode_mouse.svg";
import dfl from "/dframe_line.svg";
import dfimg from "/dframe_img.svg";
import neca from "/nec_arrow.svg";
import lswb1 from "/lsw_book.svg";
import lswb2 from "/lsw_book2.svg";
import lswl from "/lsw_line.svg";
import lswm from "/lsw_mic.svg";
import lsww from "/lsw_write.svg";
import ap1 from "/ap_img1.svg";
import ap2 from "/ap_img2.svg";
import apl from "/ap_line.svg";
import appu from "/ap_p.svg";
import apw from "/ap_write.svg";
import apw2 from "/ap_write2.svg";
import apye from "/ap_y.svg";

export default function Events() {
  return (
    <div id="Events">
      <section id="slides">
        {/* disrupt starts  */}

        <section id="disrupt" className="box">
          <h1>DISRUPT</h1>
          <h2>Pitch Ideas, Win Investments</h2>
          <h3>
            Disrupt is North-East India’s largest startup pitching arena, built
            around a 4-month-long intensive bootcamp where selected startups
            receive mentorship, resources, and guided support to refine their
            ideas. The journey culminates in a grand pitching finale at UDGAM,
            where founders present to leading investors, VCs, and angel
            networks. Finalists gain visibility, tools, and opportunities to
            secure investments and scale their ventures.
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
              <span>24th</span> Jan
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="black"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
            InternFair is UDGAM’s platform that connects students with leading
            companies, unlocking valuable internship and networking
            opportunities across diverse domains. Alongside the main recruitment
            fair, the Road to InternFair program equips participants with
            resources, guidance, and project-building support to strengthen
            their CVs and develop industry-ready skills. It’s the perfect
            launchpad for students exploring future career paths.
          </h3>
          <div id="in2">
            <p>Fri-Sun</p>
            <p>
              <span>23rd-25th</span> Jan
            </p>
            <img src={internPin} id="in1" alt="" />
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
          <img src={hired} id="in4" alt="" />
          <img src={internTie} id="in5" alt="" />
          <img src={redPin} id="in6" alt="" />
          <img src={yellowPin} id="in7" alt="" />
          <div id="in8">Are you ready to enter?</div>
        </section>

        {/*Expo begins*/}

        <section id="expo" className="box">
          <div id="exbg">
            <img src={sexpoBg} id="exbbg" alt="" />

            <picture>
              <source media="(max-width: 1150px)" srcSet={exporange} />
              <img src={sexporange} id="exor" alt="Description" />
            </picture>
            <img src={expoWrite} id="exwr" alt="" />
            <p>
              Start-Up Expo is UDGAM’s premier platform where startups showcase
              their innovations and connect with investors, VCs, incubators, and
              government leaders from across India. Designed for visibility and
              growth, the Expo helps founders network, gain feedback, and
              discover opportunities to elevate their ventures to the next
              level.
            </p>
          </div>
          <div id="ex2">
            <p>Sunday</p>
            <p>25th Jan</p>
            <img src={expoDiamond} id="ex3" alt="" />
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#EF9539"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* Product management starts*/}

        <section className="box" id="pmx">
          <div id="pmxh">
            <h1>PMx</h1>
            <h2>PRODUCT MANAGEMENT EXPEDITION</h2>
            <h3>
              PMx is India’s largest product management expedition, bringing
              together thousands of problem-solvers, designers, and innovators
              to tackle real-world product case studies. Participants dive into
              live industry problems, analyze user needs, design solutions, and
              showcase their product-thinking skills. Perfect for anyone who
              loves solving complex challenges, PMx offers a high-impact
              platform to learn, compete, and shine in the world of product
              management.
            </h3>
          </div>
          <img src={pmx1} id="pmx1" alt="" />
          <div id="pmx2">
            <p>Saturday</p>
            <p>
              <span>24th</span> Jan
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#EE3B3F"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img src={pmx2} id="pmx4" alt="" />
        </section>

        {/* encode starts  */}

        <section className="box" id="enc">
          <img src={encw} id="encimg" alt="" />
          <h1>
            Are you a curious mind eager to harness the latest advancements in
            AI to transform the world? Or do you have the vision to invent
            solutions for the future? EnCode is here with an exciting
            opportunity for you! UDGAM 2026, IIT Guwahati proudly presents the
            fifth edition of its flagship AI Hackathon, EnCode, designed to
            inspire, challenge, and empower innovators.
          </h1>
          <div id="enc2">
            <p>Saturday</p>
            <p>
              <span>24th</span> Jan
            </p>
          </div>
          <img src={enca} id="enc3" alt="" />
          <img src={encm} id="enc4" alt="" />
          <div id="enc5">
            <a
              href="https://unstop.com/hackathons/encode-2026-code-to-innovate-udgam-2026-iit-guwahati-1609664"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="enc31">
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
                    stroke="#161616"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#161616"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* dframe starts  */}

        <section className="box" id="df">
          <h1>D-FRAME</h1>
          <img src={dfl} id="df1" alt="" />
          <h2>
            UDGAM, the Annual E-summit of IIT Guwahati in partnership with White
            Space, the Design club presents DFrame: UI/UX D-frame is the perfect
            blend of creativity and business relevance, designed to enhance the
            innovative potential of designers. It challenges participants to
            flex their creative skills, crafting technical solutions while
            maintaining a strong human-centric approach.
          </h2>
          <img src={dfimg} id="df2" alt="" />
          <div id="df3">
            <p>Saturday</p>
            <p>
              <span>24th</span> Jan
            </p>
          </div>
          <div id="df5">
            <a
              href="https://unstop.com/competitions/dframe-2026-uiux-udgam-2026-iit-guwahati-1613019"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="df31">
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#FFF9F0"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* nec starts  */}

        <section className="box" id="nec">
          <div id="nec1">
            <img src={neca} alt="" />
            <div id="nec2">
              <h1>NEC</h1>
              <h2>Northeastern Entrepreneurship Conference</h2>
              <h3>
                E-Cell IIT Guwahati presents the Northeast Entrepreneurship
                Conference, a platform bringing together entrepreneurs, and
                innovators from across the region. The conference will feature
                insightful talks, panel discussions, and networking
                opportunities focused on innovation, startups, and regional
                growth.
              </h3>
            </div>
          </div>
          <div id="nec3">
            <p>Saturday</p>
            <p>
              <span>24th</span> Jan
            </p>
          </div>
          <div id="nec5">
            <a
              href="https://unstop.com/competitions/dframe-2026-uiux-udgam-2026-iit-guwahati-1613019"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="nec31">
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
                    stroke="#791323"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#791323"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* LS & W starts  */}

        <section className="box" id="lsw">
          <img src={lsww} id="lsw1" alt="" />
          <img src={lswl} id="lsw2" alt="" />
          <h3>UDGAM ’26 brings you a CV Building Workshop designed for both tech & non-tech internships, packed with practical insights to help your resume stand out where it matters.Learn directly from industry experts and discover what recruiters actually look for.
          Because the right story on paper can open the right doors.
          </h3>
          <img src={lswb1} id="lsw3" alt="" />
          <img src={lswb2} id="lsw4" alt="" />
          <img src={lswm} id="lsw5" alt="" />
          <div id="lsw6">
            <a
              href="https://unstop.com/college-fests/udgam-2026-indian-institute-of-technology-iit-guwahati-407736"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="lsw61">
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
                    stroke="#262261"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#262261"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div id="lsw7">
            <p>Saturday</p>
            <p>
              <span>24th</span> Jan
            </p>
          </div>
        </section>

        {/* antha prerna starts  */}
        <section className="box" id="ap">
          <div id="apcon">
            <img src={apye} id="ap1" alt="" />
            <img src={appu} id="ap2" alt="" />
            <img src={apl} id="ap3" alt="" />
            <img src={apw} id="ap4" alt="" />
            <img src={apw2} id="ap5" alt="" />
          </div>
          <h3>How sharp is your business savvy? Put your knowledge to the test with our exciting quiz and see if you're a true business whiz or if it’s time for a little refresher!The Entrepreneurship Cell of IIT Guwahati is thrilled to announce a Business Quiz for all enthusiasts and business buffs as part of its annual entrepreneurship summit, UDGAM '26.</h3>
          <img src={ap1} id="ap6" alt="" />
          <img src={ap2} id="ap7" alt="" />
          <div id="ap8">
            <a
              href="https://unstop.com/college-fests/udgam-2026-indian-institute-of-technology-iit-guwahati-407736"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="ap61">
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
                    stroke="#151131"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#151131"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/*Sparkles starts*/}

        <section className="box" id="spk">
          <div id="spkh">
            <h1>SPARKLE</h1>
            <h2>The Student Startup Bootcamp</h2>
            <h3>
              Sparkle is UDGAM’s dedicated platform for school students (Classes
              6–12) to explore entrepreneurship, creativity, and
              problem-solving. It encourages young innovators to think boldly,
              develop ideas, and present solutions through guided events,
              activities, and competitions. Designed as a launchpad for budding
              leaders, Sparkle helps students transform their imagination into
              real, impactful concepts.
            </h3>
          </div>
          <div id="spk2">
            <p>Friday</p>
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
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.346 38.0917V19.7024H24.9567"
                    stroke="#FFF9F0"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img src={spkImg1} id="spk4" alt="" />
          <img src={spkImg2} id="spk5" alt="" />
        </section>
      </section>
    </div>
  );
}