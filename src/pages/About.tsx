import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Perspective
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            A space for exploring ideas, finding inspiration, and discovering new ways of seeing the world.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p>
            Perspective began with a simple question: What if we could create a space where thoughtful ideas, 
            meaningful stories, and practical wisdom come together to enrich our daily lives?
          </p>
          <p>
            In a world saturated with information, we felt the need for something different—a publication that 
            prioritizes depth over speed, quality over quantity, and authentic connection over viral content. 
            Perspective is our answer to that need.
          </p>
          <p>
            We explore topics that matter: wellness practices that actually work, travel experiences that transform 
            us, creative pursuits that bring joy, and personal growth strategies that lead to lasting change. 
            Our approach is grounded in curiosity, backed by research, and enriched by lived experience.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We believe that how we see the world shapes how we experience it. Perspective is dedicated to 
              offering fresh viewpoints, practical insights, and inspiring stories that help readers:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Cultivate mindful, balanced lifestyles that prioritize wellbeing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Explore the world with curiosity and respect</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Express themselves authentically through creative pursuits</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Embrace personal growth as a lifelong journey</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                We share real experiences, honest reflections, and genuine insights—not curated perfection.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Thoughtfulness</h3>
              <p className="text-muted-foreground">
                Every article is carefully researched, thoughtfully written, and designed to add real value.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                We welcome diverse perspectives and believe everyone's journey deserves respect and representation.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote practices that are sustainable for individuals, communities, and the planet.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest articles, insights, and inspiration directly in your inbox.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
