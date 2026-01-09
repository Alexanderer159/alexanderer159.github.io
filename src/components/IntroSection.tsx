import HTMLIcon from "/assets/tools/HTMLIcon.png"
import CSSIcon from "/assets/tools/CSSIcon.png"
import JSIcon from "/assets/tools/JSIcon.png"
import ReactIcon from "/assets/tools/ReactIcon.png"
import PythonIcon from "/assets/tools/PythonIcon.png"
import MongoIcon from "/assets/tools/MongoIcon.png"
import TailwindIcon from "/assets/tools/TailwindIcon.png"
import BSIcon from "/assets/tools/BSIcon.png"
import CyIcon from "/assets/tools/CypressIcon.png"

const IntroSection = () => {

const tools = [
{ name: "HTML", icon: HTMLIcon },
{ name: "CSS", icon: CSSIcon },
{ name: "JavaScript", icon: JSIcon },
{ name: "React", icon: ReactIcon },
{ name: "Python", icon: PythonIcon },
{ name: "MongoDB", icon: MongoIcon },
{ name: "Tailwind", icon: TailwindIcon },
{ name: "Bootstrap", icon: BSIcon },
{ name: "Cypress", icon: CyIcon }
];

  return (
    <section className="max-w-8xl mx-auto py-16 px-8 animate-fade-in">
      <div className="text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold animate-slide-up">Making a webpage is like making a painting... <br/><br/> just with different tools.</h2>
        <div className="overflow-hidden">
        
            <div className="tools-infinite-track flex py-5">

                {tools.map((s, i) => (
                    <img key={`a-${i}`} src={s.icon} 
                    className="w-16 h-16 sm:w-24 sm:h-24 mx-5 flex-shrink-0 flex items-center justify-center overflow-hidden object-contain transition-all duration-700 filter-bw-to-original cursor-pointer hover:scale-105"/>
                ))}
                {tools.map((s, i) => (
                    <img key={`a-${i}`} src={s.icon} 
                    className="w-16 h-16 sm:w-24 sm:h-24 mx-5 flex-shrink-0 flex items-center justify-center overflow-hidden object-contain transition-all duration-700 filter-bw-to-original cursor-pointer hover:scale-105"/>
                ))}

            </div>
            
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
