import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

const navigate = useNavigate()

  return (
    <section className="relative rounded-md overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-md max-h-[500px] overflow-hidden animate-scale-in">
          <img src="public/assets/CV-Photo.png"
           className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"/>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold animate-slide-down sm:text-end text-center">Alejandro <br/> De Yavorsky</h1>
            <p className="text-lg text-center max-w-xl animate-slide-up stagger-1 border border-2 border-white p-2">
              Web developer + Passion for UI / UX = Amazing Websites.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a href="http://wa.me/+34613502876" target="_blank" 
              className="bg-primary text-primary-foreground rounded-md p-3 text-center text-base font-medium transition-all hover:scale-105 w-full duration-500">
              Contact me!
            </a>

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
