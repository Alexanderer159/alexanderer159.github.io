import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Style Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            A showcase of our design system, typography, and component patterns.
          </p>
        </div>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
              <p className="text-sm text-muted-foreground">Font: Merriweather Bold, 3rem</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
              <p className="text-sm text-muted-foreground">Font: Merriweather Bold, 2.25rem</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
              <p className="text-sm text-muted-foreground">Font: Merriweather Bold, 1.875rem</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Heading 4</h4>
              <p className="text-sm text-muted-foreground">Font: Merriweather Bold, 1.5rem</p>
            </div>
            <div>
              <p className="text-lg mb-2">Body Large - This is paragraph text at a larger size for emphasis or introductory content.</p>
              <p className="text-sm text-muted-foreground">Font: Inter Regular, 1.125rem</p>
            </div>
            <div>
              <p className="mb-2">Body Regular - This is standard paragraph text used throughout the site for comfortable reading.</p>
              <p className="text-sm text-muted-foreground">Font: Inter Regular, 1rem</p>
            </div>
            <div>
              <p className="text-sm mb-2">Body Small - Used for captions, metadata, and supplementary information.</p>
              <p className="text-sm text-muted-foreground">Font: Inter Regular, 0.875rem</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-background border border-border"></div>
              <p className="text-sm font-medium">Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-foreground"></div>
              <p className="text-sm font-medium">Foreground</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-secondary"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent"></div>
              <p className="text-sm font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted"></div>
              <p className="text-sm font-medium">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-card border border-border"></div>
              <p className="text-sm font-medium">Card</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-destructive"></div>
              <p className="text-sm font-medium">Destructive</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Primary Button
            </Button>
            <Button variant="secondary" className="rounded-full">
              Secondary Button
            </Button>
            <Button variant="outline" className="rounded-full">
              Outline Button
            </Button>
            <Button variant="ghost">
              Ghost Button
            </Button>
            <Button variant="destructive" className="rounded-full">
              Destructive Button
            </Button>
          </div>
        </section>

        {/* Category Tags */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Category Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-wellness">Wellness</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-travel">Travel</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-creativity">Creativity</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-growth">Growth</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-lifestyle">Lifestyle</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-community">Community</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium tag-financing">Financing</span>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card p-6 border border-border">
              <h3 className="text-xl font-bold mb-3">Card Title</h3>
              <p className="text-muted-foreground">
                This is a standard card component used throughout the site for containing related content and information.
              </p>
            </div>
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="text-xl font-bold mb-3">Muted Card</h3>
              <p className="text-muted-foreground">
                A variant with muted background for subtle emphasis or secondary content sections.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing Scale</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-4 bg-primary rounded"></div>
              <span className="text-sm">1rem (16px) - Small spacing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-4 bg-primary rounded"></div>
              <span className="text-sm">1.5rem (24px) - Medium spacing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-4 bg-primary rounded"></div>
              <span className="text-sm">2rem (32px) - Large spacing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-48 h-4 bg-primary rounded"></div>
              <span className="text-sm">3rem (48px) - Extra large spacing</span>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Border Radius</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-full h-24 bg-primary rounded-sm mb-2"></div>
              <p className="text-sm">Small (0.25rem)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-primary rounded-md mb-2"></div>
              <p className="text-sm">Medium (0.5rem)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-primary rounded-lg mb-2"></div>
              <p className="text-sm">Large (0.75rem)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-primary rounded-2xl mb-2"></div>
              <p className="text-sm">Extra Large (1rem)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StyleGuide;
