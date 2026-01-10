import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/Project";

const AllProjects = () => {

const cols = projects.length % 3 === 0 ? 3 : projects.length % 2 === 0 ? 2 : 3

return (
<>
  <div className="min-h-screen bg-background animate-fade-in">
    
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
{/* Hero Section */}
      <div className="mb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">Check out my most recent projects</p>
      </div>

{/* Projects Grid */}
      <section>
        <div className={`grid grid-cols-1 sm:grid-cols-${cols} gap-6`}>
          {projects.map((project, index) => (
            <div key={project.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
</>
);};

export default AllProjects;
