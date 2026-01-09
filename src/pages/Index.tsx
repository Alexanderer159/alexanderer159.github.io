import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";

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
            <p className="text-xl text-muted-foreground leading-relaxed">Submit your email here and I will contact you.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email" className="flex-1 p-5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"/>
              <button className="p-5 rounded-md bg-primary text-primary-foreground font-medium hover:scale-105 transition-all">Submit</button>
            </div>
        </section>
      </main>
      
    </div>
  );
};

export default Index;
