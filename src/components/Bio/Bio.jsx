import './bio.css'
import codingVid from '../../assets/Alejandro/Coding.mp4'

export const Bio = () => {

	return (
<>
        <div className="bio animated">
          
          <p className="who-what protitle ms-5 ps-5"><strong className="emphasis">What </strong> am I?</p>

          <div className="d-flex justify-content-between px-5">

            <div className="d-flex justify-content-center align-items-center">
              <p className="bio-text text-center m-5 p-5">
I'm a <strong className="emphasis"> highly dedicated </strong> developer with a background in mainly <strong className="emphasis">Front-End Development</strong> (With some sprinkles of <strong className="emphasis">QA Automation</strong>) and Language Interpretation. 
<br/> <strong className="emphasis">Passionate </strong> about creating fully functional and eye-catching projects Using Agile methodologies!
<br/> I believe <strong className="emphasis">communication</strong> is key for human interaction and I pride myself on being clear, to the point and as assertive as possible, in both my writing and my day-to-day.
              </p>
            </div>

            <video autoPlay muted loop className="bio-vid" src={codingVid} type="video/mp4"/>
         
          </div>
          
        </div>
</>
)}