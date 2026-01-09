import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Index = () => {
  const featuredArticles = articles.slice(0, 6);

  return (
    <div className=" bg-background animate-fade-in">
      
      <main className="max-w-7xl mx-auto p-8">
{/* Hero Section */}
        <HeroSection />

{/* Intro Section */}
        <IntroSection />

        {/* Featured Articles Grid */}
        <section id="articles" className="py-12">
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 animate-slide-up">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

{/* Newsletter Section */}
        <section className="my-20 rounded-md bg-card p-12 text-center animate-scale-in max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Contact me.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Send me en email here and I will contact you.</p>
            <div className="mx-auto">
              <Button className="bg-primary hover:scale-105 transition-all duration-700 text-primary-foreground rounded-md">
            <a href="mailto:traledeyavorsky@gmail.com" target="_blank" className="flex px-8 py-3"><Mail className="mr-2 h-4 w-4" />Send Email</a></Button>
            </div>
        </section>
      </main>
      
    </div>
  );
};

export default Index;
