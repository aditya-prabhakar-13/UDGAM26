import React from 'react' 
import './OurTeam.css';
import convenerPhoto from "../assets/ourteam/convinormal.png";
// import transparent from "../assets/transparent.png";
import subtract from "../assets/ourteam/Subtract.svg";
// import Rectangle14 from "../assets/Rectangle14.svg";
import our from "../assets/ourteam/our.png";
// import rectangleleft from "../assets/rectangle-left.svg";
// import design from "../assets/design.svg";
// import ls from "../assets/ls.svg";
// import disrupt from "../assets/disrupt.svg";
import disrupt2 from "../assets/ourteam/disrupt2.svg";
// import expo from "../assets/expo.svg";
import expo2 from "../assets/ourteam/expo2.svg";
// import ifbg from "../assets/ifbg.svg";
import if1 from "../assets/ourteam/if1.svg";
import if2 from "../assets/ourteam/if2.svg";
// import ina from "../assets/ina.svg";
// import marky from "../assets/marky.svg";
// import prb from "../assets/prb.svg";
// import website from "../assets/website.svg";
// import sparkle from "../assets/sparkle.svg";
import sparkle2 from "../assets/ourteam/sparkle2.svg";
import purple from "../assets/ourteam/purple.svg";
import pmxpng from "../assets/ourteam/pmxpng.png";
import ifpng from "../assets/ourteam/ifpng.png";
// import websitebg from "../assets/websitebg.svg";
// import webpng from "../assets/webpng.png";
import designpng from "../assets/ourteam/designpng.png";
import sparklepng from "../assets/ourteam/sparklepng.png";
import lspng from "../assets/ourteam/lspng.png";
import inapng from "../assets/ourteam/inapng.png";
import disruptpng from "../assets/ourteam/disruptpng.png";
import marketingpng from "../assets/ourteam/marketingpng.png";
import prbpng from "../assets/ourteam/prbpng.png";
import expopng from "../assets/ourteam/expopng.png";
import phone from "../assets/ourteam/phone.svg";
import mail from "../assets/ourteam/Mail.svg";
import linkedin from "../assets/ourteam/linkedin.svg";
import rishi from "../assets/ourteam/rishi.jpg";
import sanika from "../assets/ourteam/sanika.png";
import kartik from "../assets/ourteam/kartik.jpg";
import kushagra from "../assets/ourteam/kushagra.jpg";
import madhav from "../assets/ourteam/madhav.jpg";
import lakshya from "../assets/ourteam/lakshya.jpg";
import krrish from "../assets/ourteam/krrish.jpeg";
import utkarsh from "../assets/ourteam/utkarsh.jpeg";
import shlok from "../assets/ourteam/shlok.jpg";
import suramya from "../assets/ourteam/suramya.jpeg";
import abhyuday from "../assets/ourteam/abhyuday.jpg";
import saumya from "../assets/ourteam/saumya.jpeg";
const OurTeam = () => {
    return (
            <section className="our-team max-md:pb-[25vw]">
                  <div className='Heading'>
                    <div className="our-team-heading">OUR TEAM</div>
                  </div>
            <div className='meet-our-heads'>
                <div className="col1">
                    <div className='image-container1' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container2' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${rishi})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>RISHI AGARWAL</div>
                    <div className='POR'>STARTUP EXPO HEAD</div>
                        
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919351127432">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:rishi.agarwal@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/rishi-agarwal04"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                    <div className="star">
                        <img src={subtract} className="subtract-left" />
                    <div className='image-container3' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${sanika})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className='Name'>SANIKA MADKE</div>
                        <div className='POR'>DESIGN HEAD</div>
                        
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919146073490">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:m.sanika@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/sanika-madke-514409286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                </div>
                    <div className='image-container4' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${kartik})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>KARTIK BISHT</div>
                        <div className='POR'>INTERNFAIR HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+917505641236">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:k.bisht@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/kartikbisht09/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div className="col2">
                    <div className='meet' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                        <div className="meet-text">MEET</div>
                        <img src={subtract} className="subtract-top" /> 
                    </div>
                    
                    
                    <div className='image-container5' >
                <div className="card">
                            <img src={lakshya} alt="profile" />
                            <div className="text-cut">
                    <div className='Name-cut'>LAKSHYA CHOUDHARY</div>
                                <div className='POR-cut'>DESIGN HEAD</div>
                            </div>
                        </div>
                        <div className="overlay-cut">
                            <div className="icons">
                                <a href="tel:+918200053453">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:C.lakshya@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/lakshyachoudhary0805?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BERFEp%2FUKT26w0XNkFifaUw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                    
                <div className='image-container6' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${kushagra})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>KUSHARGA JAIN</div>
                        <div className='POR'>MARKETING HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918852963846">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:j.kushagra@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/kushagra-jain-402332280"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                <div className='image-container7' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${madhav})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>MADHAV GOEL</div>
                        <div className='POR'>LECTURE SERIES & WORKSHOPS HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918318118023">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:madhav.goel@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/madhav-goel-417a38297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                
                
                </div>
                
                <div className="col3">
                    <div className='our' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                    <div className="our-text">OUR</div>
                    </div>

                    <div className='image-container8' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${krrish})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>KRRISH KAVYA</div>
                        <div className='POR'>EVENTS HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918229027032">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:k.krrish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/krrish-kavya-b3244b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container9' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${utkarsh})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>UTKARSH SHARMA</div>
                        <div className='POR'>FINANCE HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918169866597">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:u.sharma@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/utkarsh-sharma77/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container10' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${shlok})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>SHLOK SURAIYA</div>
                        <div className='POR'>MARKETING HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919820567744">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:s.shlok@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://in.linkedin.com/in/shlok-suraiya"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                
                </div>
                
                <div className="col4">
                <div className='heads' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                    <div className="heads-text">HEADS</div>
                    </div>

                <div className='image-container11' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${suramya})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>SURAMYA SINGH</div>
                        <div className='POR'>PR & BRANDING HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919794894424">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:s.suramya@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="s.suramya@iitg.ac.in"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                <div className='image-container12' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${abhyuday})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>ABHYUDAY KASHYAP</div>
                        <div className='POR'>DISRUPT HEAD</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+917903263868">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:k.abhyuday@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/abhyuday-kashyap-187082236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                    <div className="star">
                        <img src={subtract} className="subtract-right" />
                <div className='image-container13' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${saumya})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>SAUMYA JAIN</div>
                        <div className='POR'>DESIGN HEAD</div>
                        
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+917878870170">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:j.saumya@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/saumya-jain-apj"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                        </div>
                        </div>
                </div>
            </div>



            {/* <div className="mobile">
                    <div className='image-container-mobile' style={{backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                </div> */}

                    




            <div className='managers-heading'>
                    <div >OUR MANAGERS</div>
                </div>
            <div className="managers">
                <div className="column1">
                    <div className="pmx" style={{backgroundImage: `url(${pmxpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="pmx-text">PMX &<br />ENCODE</div>
                        
                        <div className="overlay-managers">
                            <span>Pratyaksha </span>
                            <span>Aniket Mandal</span>
                            <span>Eashita Karmakar</span>
                            <span>Mahendra Varma</span>
                        </div>
                        
                    </div>
                    <div className="if" style={{backgroundImage: `url(${ifpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="if-text">INTERNFAIR</div>
                        <div className="overlay-managers">
                            <span>Aarya Shisode</span>
                            <span>Turvi</span>
                            <span>Dhruv jain</span>
                            <span>Tanush Dhiman</span>
                            <span>Lokesh Pawar</span>
                            <span>Tannya Goel</span>
                        </div>
                        <img src={if1} className='if-image1' />
                        <img src={if2} className='if-image2' />
                    </div>
                    {/* <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div> */}
                </div>
                <div className="column2">
                    <div className="design" style={{backgroundImage: `url(${designpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="design-text">DESIGN</div>
                        <div className="design-managers">
                            <span>Dev</span>
                            <span>Nila</span>
                            <span>Shradha</span>
                            <span>Ayushman</span>
                            <span>Rupiga</span>
                            <span>Ronik</span>
                        </div>
                        <img src={purple} className='purple-left' />
                        <img src={purple} className='purple-top' />
                    </div>
                    <div className="sparkle" style={{backgroundImage: `url(${sparklepng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="sparkle-text">SPARKLE</div>
                        <img src={sparkle2} className='sparkle-image1' />
                        <div className="overlay-managers">
                            <span>Ekas Babbar</span>
                            <span>Kanan</span>
                            <span>Jayanth Mummana</span>
                            <span>Mayank Sahu</span>
                            
                        </div>
                    </div>
                </div>
                
                <div className="column3">
                    <div className="ls" style={{backgroundImage: `url(${lspng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="ls-text">LECTURE <br />SERIES</div>
                        <div className="design-managers">
                            <span>Priti</span>
                            <span>Muskan</span>
                            <span>Manya Dhamija</span>
                            <span>Nandita</span>
                            <span>Ayush Mangal </span>
                            <span>Madaram</span>
                        </div>
                    </div>
                    <div className="ina" style={{backgroundImage: `url(${inapng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="ina-text">INA</div>
                        <div className="design-managers">
                            <span>Aditya Kakade</span>
                            <span>Aditya Prabhakar</span>
                            <span>Aditya Chauhan</span>
                            <span>Abhinav Chouhan</span>
                            <span>Aadhith R </span>
                            <span>Deependra Singh</span>
                            <span>Shruti Lonbale</span>
                            <span>Palak Singhal</span>
                            <span>Mridu</span>
                        </div>
                    </div>
                    {/* <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div> */}
                </div>

                <div className="column4">
                    <div className="disrupt" style={{backgroundImage: `url(${disruptpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="disrupt-text">DISRUPT</div>
                        <img src={disrupt2} className='disrupt-image1' />
                        <div className="disrupt-managers">
                            <span>Harshita Garg</span>
                            <span>Ajinkya Kulkarni</span>
                            <span>Kabya Ranjan Choubey</span>
                            <span>Abhinav Rai</span>
                            <span>Sandesh</span>
                            <span>Aquib</span>
                            <span>Tanushka</span>
                            <span>Koustubh</span>
                            <span>Mrunali Ughade</span>
                        </div>
                    </div>
                    <div className="marky" style={{backgroundImage: `url(${marketingpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="marky-text">MARKETING</div>
                        <div className="marky-managers">
                            <span>Kurra sravan </span>
                            <span>Akshaj Tiwari</span>
                            <span>Aryan Prajapati </span>
                            <span>Govind Akash</span>
                            <span>Yogita</span>
                            <span>Gaurang Srivastava </span>
                            <span>Ankit Vidyarthi</span>
                            <span>Harshit Agarwal</span>
                            <span>Rishi Agrawal</span>
                            <span>Atharva Meshram</span>
                        </div>
                    </div>
                </div>
                <div className="column5">
                    <div className="expo" style={{backgroundImage: `url(${expopng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="expo-text">STARTUP<br />EXPO</div>
                        <img src={expo2} className='expo-image1' />
                        <div className="expo-managers">
                            <span>Bharath B Sundar</span>
                            <span>Palash Garg</span>
                            <span>Nupur Pandey </span>
                            <span>Saijilee Khurana</span>
                            <span>Ojaswi Agrawal</span>
                            <span>Ashmita Bhosale</span>
                            <span>Uday Kumar</span>
                            <span>Sukant Agrawal</span>
                            
                        </div>
                    </div>
                    <div className="prb" style={{backgroundImage: `url(${prbpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="prb-text">PR <br />BRANDING</div>
                        <div className="design-managers">
                            <span>Aneesh </span>
                            <span>Aditya Ranjan</span>
                            <span>Navneet </span>
                            <span>Archit</span>
                            <span>Huzefa</span>
                            <span>Shreshtha</span>
                            <span>Anushka Patil</span>
                            <span>Amogh</span>
                        </div>
                        <img src={purple} className='purple-rtop' />
                        {/* <img src={purple} className='purple-rbottom' /> */}
                    </div>
                    {/* <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div> */}
                </div>

            </div>
                </section>
        );
}; export default OurTeam;