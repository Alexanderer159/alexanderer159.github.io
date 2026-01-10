import { useParams, Navigate, useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, getRelatedProjects } from "@/data/Project";
import { Facebook, Twitter, Linkedin, Link2, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const navigate = useNavigate()
  
  if (!project) {return <Navigate to="/404" replace />;}

  const relatedProjects = getRelatedProjects(project.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

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

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      
      <main>

        {/* Hero Image */}
        <button onClick={() => navigate("/projects")} className="ps-16 text-sm hover:text-neutral-500 transition-all duration-700 mb-5">← Go Back.</button>
        <div className="relative w-full mb-12">
          <img src={project.image} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent sm:to-background" />
        </div>

        <div className="max-w-5xl mx-auto px-8 sm:-mt-60 -mt-16 relative">
          {/* Project Header */}
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className={`py-2 px-3 rounded-full text-sm font-medium ${getCategoryClass(project.category)}`}>{project.category}</span>
              <span className="text-sm text-muted-foreground">{project.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{project.readTime} read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {project.subtitle}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-b border-border py-6">
              <div className="flex items-center gap-4">
                <img src={project.author.avatar} className="w-14 h-14 rounded-full object-cover"/>
                <div>
                  <p className="font-semibold">{project.author.name}</p>
                  <p className="text-sm text-muted-foreground">Role: {project.author.bio}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <button onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                  <Link2 className="w-4 h-4" />
                </button>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

{/* Project Content */}
          <div className="prose prose-lg max-w-none mb-16 animate-slide-up stagger-2">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-justify">{project.content.introduction}</p>

            {project.content.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-2xl bg-muted border-l-4 border-accent">
              <p className="text-lg leading-relaxed italic text-foreground text-justify">{project.content.conclusion}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm bg-muted text-foreground">#{tag}</span>
              ))}
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="md:hidden mb-12 pb-12 border-b border-border">
            <p className="text-sm font-semibold mb-4">Share this project</p>
            <div className="flex items-center gap-3">
              <button onClick={handleCopyLink}
                className="flex-1 py-3 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center gap-2">
                <Link2 className="w-4 h-4" />
                <span className="text-sm">Copy link</span>
              </button>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mb-16 rounded-2xl bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this project?</h3>
            <p className="text-muted-foreground mb-6">Get yours added here in no time.</p>          
            <div className="mx-auto">
              <Button className="bg-primary hover:scale-105 transition-all duration-700 text-primary-foreground rounded-md">
            <a href="mailto:traledeyavorsky@gmail.com" target="_blank" className="flex px-8 py-3"><Mail className="mr-2 h-4 w-4" />Send Email</a></Button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <section className="bg-muted py-16 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 animate-slide-up">Other projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <div key={relatedProject.id} className={`animate-slide-up stagger-${Math.min(index + 1, 3)}`}><ProjectCard {...relatedProject}/></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Project;
