import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Creativity = () => {
  const creativityArticles = articles.filter(article => 
    article.category.toLowerCase() === "creativity"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Creativity & Expression
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Unlock your creative potential and explore the art of authentic self-expression. 
            From overcoming blocks to building sustainable creative practices, discover insights that nurture your artistic journey.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativityArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* About Creativity */}
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Nurturing Creative Spirit</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Creativity isn't reserved for artists—it's a fundamental human capacity that enriches every aspect of life. 
                Whether you're writing, designing, problem-solving, or simply reimagining your daily routine, 
                creative thinking opens doors to innovation and fulfillment.
              </p>
              <p>
                We explore the practices, mindsets, and tools that help creatives of all kinds stay inspired, 
                overcome obstacles, and build sustainable creative lives. From finding your unique voice to 
                navigating the practical challenges of creative work, we're here to support your journey.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Creativity;
