import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

const ProjectCard = ({ id, title, category, date, image }: ProjectCardProps) => {
  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("history")) return "tag-language";
    if (normalized.includes("language")) return "tag-community";
    if (normalized.includes("tech")) return "tag-wellness";
    if (normalized.includes("shop")) return "tag-travel";
    if (normalized.includes("social")) return "tag-creativity";
    if (normalized.includes("")) return "tag-growth";
    return "tag-lifestyle";
  };

  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(`/project/${id}`)} 
      className="relative text-start group block rounded-md overflow-hidden transition-all duration-700 col-span-1 sm:col-span-2 hover:scale-95 aspect-[5/3]">
      
        <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"/>
        
{/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent group-hover:from-black/0 group-hover:via-black/0 transition-all duration-700" />
        
{/* Content overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">

{/* Top section - Category and Date */}
          <div className="flex justify-between">
            <span className={`px-4 py-2 rounded-md text-xs font-medium backdrop-blur-md ${getCategoryClass(category)}`}>{category}</span>
            <span className="px-4 py-2 rounded-md backdrop-blur-sm text-xs font-medium text-white border border-white/10">{date}</span>
          </div>

{/* Bottom section - Title and Arrow */}
          
          <div className="">
            <span className="text-white/50 text-xs font-medium block mb-3">{id}</span>
            <h3 className="text-white text-xl sm:text-3xl font-bold">{title}</h3>
          </div>
        </div>

{/* Floating circular arrow button - positioned outside content overlay */}
        <div className="absolute rounded-md bottom-6 right-6 group-hover:bottom-3 group-hover:right-3 w-12 h-12 bg-[hsl(var(--cream))] flex items-center justify-center text-[hsl(var(--cream-foreground))] hover:scale-110 transition-all duration-700">
        <ArrowUpRight className="w-5 h-5" /></div>
      
    </button>
  );
};

export default ProjectCard;
