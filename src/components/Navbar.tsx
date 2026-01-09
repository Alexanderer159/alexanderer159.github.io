import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isDark, setIsDark] = useState(false);
const navigate = useNavigate();

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setIsDark(savedTheme === "dark" || (!savedTheme && prefersDark));
}, []);

useEffect(() => {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}, [isDark]);

const toggleTheme = () => {
  setIsDark(d => !d);
};

return (
<>
  <nav className="sticky top-0 z-50 py-4">
    <div className="max-w-8xl mx-auto px-8">
      <div className="flex items-center justify-between h-16 backdrop-blur-lg bg-background/60 border border-border/50 px-6 rounded-md">

{/* Desktop Navigation */}

        <nav className="hidden sm:flex items-center gap-2">
          <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:bg-muted/90 rounded-md p-3 duration-500 transition-all">Home</button>
          <button onClick={() => {navigate("/projects")}} className="text-sm font-medium hover:bg-muted/90 rounded-md p-3 duration-500 transition-all">Projects</button>
          <button onClick={() => {navigate("/reviews")}} className="text-sm font-medium hover:bg-muted/90 rounded-md p-3 duration-500 transition-all">Reviews</button>
          <button onClick={() => {navigate("/about")}} className="text-sm font-medium hover:bg-muted/90 rounded-md p-3 duration-500 transition-all">About me</button>
        </nav>

{/* Actions */}

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-muted/90 transition-all duration-500">
            {isDark ? (<Sun className="h-5 w-5" />) : (<Moon className="h-5 w-5" />)}
          </button>
          
          <a href="http://wa.me/+34613502876" target="_blank"
           className="hidden md:flex bg-primary text-primary-foreground rounded-md px-8 py-2 hover:scale-105 transition-all duration-500">Contact Me.</a>

{/* Mobile Menu Button */}

          <button className="sm:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>

      </div>

{/* Mobile Menu */}

      {isMenuOpen && (
        <div className="sm:hidden py-4 border-t border-border animate-fade-in">
          <nav className="flex flex-col gap-4">
            <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:text-accent transition-colors">Home</button>
            <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:text-accent transition-colors">Projects</button>
            <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:text-accent transition-colors">Wellness</button>
            <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:text-accent transition-colors">Travel</button>
            <button onClick={() => {navigate("/")}} className="text-sm font-medium hover:text-accent transition-colors">About Me.</button>
            <a href="http://wa.me/+34613502876" target="_blank" className="bg-primary text-primary-foreground rounded-md w-full">Contact Me.</a>
          </nav>
        </div>
      )}

    </div>
  </nav>
</>
);};

export default Navbar;
