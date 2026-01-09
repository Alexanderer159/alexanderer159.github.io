import { Github, Mail, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

const navigate = useNavigate()

  return (
    <section className="rounded-md bg-muted sm:my-16 animate-fade-in">
      <div className="grid sm:grid-cols-2 gap-6 p-6 sm:p-12">
{/* Left side - Image */}
        <div className="aspect-[4/3] sm:aspect-auto border-2 bg-white sm:border-4 border-white rounded-md sm:max-h-[500px] overflow-hidden animate-scale-in group hover:scale-75 transition-all duration-1000 hover:rotate-45">
          <img src="/assets/CV-Photo.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-150 group-hover:-rotate-45"/>
        </div>

{/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4 sm:space-y-10">
            <h1 className="text-4xl sm:text-7xl font-bold animate-slide-down sm:text-end text-center">Alejandro <br/> De Yavorsky.</h1>
            <p className="text-lg text-center max-w-xl animate-slide-up stagger-1 border border-2 border-white p-2">Web developer + Passion for UI / UX = Amazing Websites.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a href="http://wa.me/+34613502876" target="_blank" 
              className="bg-primary text-primary-foreground rounded-md p-3 text-center text-base font-medium transition-all hover:scale-105 w-full duration-500">Contact me.</a>

            <div className="flex justify-center w-full items-center gap-4">
              <a href="https://github.com/Alexanderer159" target="_blank"
                className="w-12 h-12 rounded-md border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 duration-500" >
                <Github className="w-5 h-5" />
              </a>

              <a href="mailto:traledeyavorsky@gmail.com" target="_blank"
                className="w-12 h-12 rounded-md border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 duration-500" >
                <Mail className="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/in/alejandro-de-yavorsky/" target="_blank"
                className="w-12 h-12 rounded-md border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 duration-500">
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
