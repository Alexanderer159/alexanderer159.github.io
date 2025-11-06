import './testimonials.css'
import hansProfile from '../../assets/Testimonials/Hans.png'

export const Testimonials = () => {  
  
  	return (
    <>

        <div className="testi-container d-flex flex-column align-items-center animated pb-5">

            <p className="protitle text-center">Testimonials</p>

            <div className="testi-card d-flex flex-column justify-content-between align-items-center p-3">

                <img src={hansProfile} className="testi-pic my-2"/>
                
                <p className="testi-name mt-3 mb-0">Hans Christian Aparicio Moreno</p>
                <p className="testi-jobtitle mb-3"><strong className="emphasis">Senior Full-Stack Developer</strong></p>
                <p className="testi-text text-center my-3 px-3"><strong className="emphasis">"</strong>Alejandro is known for his attention to detail, ensuring that each delivery meets high standards of quality and usability. His adaptability and commitment to the project were key to achieving the established objectives. Without a doubt, he is a valuable professional who would contribute greatly to any team he works on.<strong className="emphasis">"</strong></p>
                <a href="https://www.linkedin.com/in/hansaparicio/details/recommendations/?detailScreenTabIndex=1" target="_blank" className="testi-link p-2">Check veracity</a>

            </div>
        </div>

    </>
    );
};