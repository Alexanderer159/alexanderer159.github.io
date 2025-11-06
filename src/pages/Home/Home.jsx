import React, { useEffect, useState } from "react"
import './Home.css';
import { Slider } from '../../components/Slider/Slider.jsx';
import { Card } from '../../components/Card/Card.jsx';
import { Projects } from '../../components/Projects/Projects.jsx';
import { Testimonials } from '../../components/Testimonials/Testimonials.jsx';
import { Bio } from '../../components/Bio/Bio.jsx';
import { Services } from '../../components/Services/Services.jsx';
import { Contact } from '../../components/Contact/Contact.jsx';
import curriculum from '../../assets/Alejandro/CV-Alejandro-De-Yavorsky.pdf'

export const Home = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
  const interval = setInterval(() => {
    const spainTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    setTime(spainTime.format(new Date()));
  }, 1000);

  return () => clearInterval(interval);

  }, []);

  const isAwake = () => {

	const hourFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    hour: "numeric",
    hour12: false,
  });
	const spainHour = parseInt(hourFormat.format(new Date()), 10);

if (spainHour >= 9 && spainHour < 23) {

	  return true;
	} else {
	  return false;
	}};

const handleScroll = (e) => {
	document.getElementById(e).scrollIntoView({ behavior: "smooth" })
}

  return (
  <>
    <div className="portfolio-container py-5">
      
      <div className="top">
        <div className="d-flex justify-content-center align-items-center gap-5 animated">

          <Card />

          <div className="info p-5">

              <p className="name m-0">Alejandro De Yavorsky</p>

              <div className="devtext-container">
                <p className="devtext m-0">Web developer + Love for UI & UX = <strong className="emphasis">Amazing web-pages.</strong></p>
              </div>
              

              <div className="d-flex pt-4 mt-4 justify-content-between">

                <div className="d-flex gap-3">

                <a href={curriculum} download="CV-Alejandro-De-Yavorsky.pdf">
                  <button className="buttonCV p-2">
                    📜 Download My CV      
                  </button>
                </a>

                <a href="https://wa.me/+34613502876" target='_blank'>
                  <button className="buttonWA p-2">
                    <svg x="0px" y="0px" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                      <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"></path>
                    </svg> 
                    Whatsapp
                  </button>
                </a>

                </div>

                <div className="time-awake d-flex flex-row gap-2">

                  <p className="m-0">Spain | {time} | </p>
                  <p className={isAwake() ? "awake" : "asleep"}>I am {isAwake() ? "Awake" : "Asleep"} </p>
                          
                </div>


              </div>

              <Slider />

          </div>

        </div>

        <div className="d-flex justify-content-center animated">
          <a data-scroll onClick={() => handleScroll("bio")} className="arrow">
          </a>
        </div>
      </div>

      <div id="bio"></div>              
        <Bio />

      <div id="services"></div>   
        <Services />

        <div id="projects"></div>         
        <Projects />

      <div id="testimonials"></div>   
        <Testimonials />

      <div id="contact"></div>   
        <Contact />

    </div>
  </>
  )
}
