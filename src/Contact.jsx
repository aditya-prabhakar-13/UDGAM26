import React, { useEffect, useRef } from 'react';

export default function ContactMain() {
  const formRef = useRef(null);

  useEffect(() => {
    // Dynamically load EmailJS SDK (same as original page)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const SERVICE_ID = 'service_abwdtx4';
  const TEMPLATE_ID = 'template_5fc3fj6';
  const USER_ID = 'QnOrsFOAuceeMDJYy';

  function isPlaceholder(v) {
    return !v || v.indexOf('YOUR_') === 0 || v.indexOf('REPLACE_') === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (isPlaceholder(SERVICE_ID) || isPlaceholder(TEMPLATE_ID) || isPlaceholder(USER_ID)) {
      alert('EmailJS not configured. Replace SERVICE_ID, TEMPLATE_ID and USER_ID in the script.');
      return;
    }

    if (!window.emailjs) {
      alert('EmailJS SDK not loaded. See console.');
      return;
    }

    try {
      if (typeof window.emailjs.init === 'function') {
        try { window.emailjs.init(USER_ID); } catch (err) { console.warn('emailjs.init failed', err); }
      }
    } catch (err) {
      console.warn('emailjs not ready', err);
    }

    const sendBtn = form.querySelector('.send-btn');
    const originalHTML = sendBtn ? sendBtn.innerHTML : 'SEND';

    sendBtn.disabled = true;
    sendBtn.innerHTML = '<span class="dot"></span> SENDING...';

    window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-form', USER_ID)
      .then(function(response){
        console.log('EmailJS success', response);
        alert('Message sent — thank you!');
        form.reset();
      })
      .catch(function(error){
        console.error('EmailJS error', error);
        const msg = (error && error.text) ? error.text : 'Failed to send message. Check console.';
        alert(msg);
      })
      .finally(function(){
        sendBtn.disabled = false;
        sendBtn.innerHTML = originalHTML;
      });
  };

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{__html: `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      min-height: 100vh;
      background: radial-gradient(circle at top, #1a1840, #0b0a23);
      color: #fff;
      overflow-x: hidden;
    }

    /* star dots */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        radial-gradient(2px 2px at 20% 30%, #ffd54f, transparent),
        radial-gradient(2px 2px at 70% 20%, #ffd54f, transparent),
        radial-gradient(1.5px 1.5px at 40% 70%, #ffd54f, transparent),
        radial-gradient(2px 2px at 85% 60%, #ffd54f, transparent),
        radial-gradient(1px 1px at 10% 80%, #ffd54f, transparent);
      pointer-events: none;
      opacity: 0.8;
    }

    .container {
      max-width: 1200px;
      margin: auto;
      padding: 6rem 2rem 4rem; /* pushed down */
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    /* LEFT */

    .left h1 {
      font-size: clamp(48px, 6vw, 84px);
      font-weight: 700;
      line-height: 1.1;
    }

    .left h1 span {
      font-style: italic;
    }

    .left p {
      margin-top: 1.5rem;
      font-size: clamp(24px, 3.5vw, 48px);
      font-weight: 300;
      opacity: 0.9;
    }

    .socials {
      margin-top: 3rem;
      display: flex;
      gap: 7rem;
    }

    .social-btn {
      width: 72px;
      height: 72px;
      border: 3px solid #fff;
      border-radius: 18px;
      display: grid;
      place-items: center;
      color: #fff;
      text-decoration: none;
      transition: all 0.25s ease;
    }
    .social-btn i {
      font-size: 32px;
    }

    .social-btn svg {
      width: 32px;
      height: 32px;
    }
    .social-btn.instagram svg {
      width: 48px;
      height: 48px;
      transform: translateY(0.5px);
      display: block;
    }
    .social-btn.instagram svg path {
      stroke: currentColor;
      stroke-width: 6;
      stroke-linejoin: round;
      stroke-linecap: round;
      fill: currentColor;
    }
    .social-btn:hover {
      background: #ffd54f;
      color: #0b0a23;
      border-color: #ffd54f;
    }

    /* RIGHT CARD */
    .card {
      border: 2px solid rgba(255,255,255,0.8);
      border-radius: 26px;
      padding: 3rem 2.5rem;
      backdrop-filter: blur(8px);
    }

    .card h2 {
      font-size: clamp(28px, 3.5vw, 48px);
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .field {
      margin-bottom: 2.2rem;
    }

    .field input {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(255,255,255,0.6);
      padding: 0.6rem 0;
      color: #fff;
      font-size: 1rem;
      outline: none;
    }

    .field input::placeholder {
      color: rgba(255,255,255,0.7);
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
    }

    .send-btn {
      margin-top: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.7rem 2.2rem 0.7rem 0.9rem;
      border-radius: 999px;
      background: transparent;
      border: 2px solid #ffd54f;
      color: #ffd54f;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .send-btn .dot {
      width: 18px;
      height: 18px;
      background: #ffd54f;
      border-radius: 50%;
      transition: background-color 0.2s ease, transform 0.15s ease;
    }

    .send-btn:hover {
      background: #ffd54f;
      color: #0b0a23;
    }

    .send-btn:hover .dot {
      background: #ffffff;
      transform: scale(0.95);
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .container {
        grid-template-columns: 1fr;
        text-align: center; 
      }

      .socials {
        justify-content: center;
        gap: 1.5rem;
      }
      .left {
        padding-top: 0;
      }
    }
  `}} />

      <section className="container">
        <div className="left">
          <h1>WANNA GET<br /> IN <span>TOUCH</span> ?</h1>
          <p>We Would Like To Hear<br />From You</p>

          <div className="socials">
            <a href="#" className="social-btn instagram" aria-label="Instagram">
              <svg viewBox="-25.6 -25.6 307.20 307.20" id="Flat" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"></path> </g></svg>
            </a>

            <a href="#" className="social-btn">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="#" className="social-btn">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>CONTACT US</h2>

          <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" name="from_name" placeholder="Name / Company Name" required />
            </div>

            <div className="field">
              <input type="email" name="reply_to" placeholder="E-mail" required />
            </div>

            <div className="field">
              <input type="tel" name="phone" placeholder="Phone" />
            </div>

            <button type="submit" className="send-btn"><span className="dot" />SEND</button>
          </form>
        </div>
      </section>
    </>
  );
}
