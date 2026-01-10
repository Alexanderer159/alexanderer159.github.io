const AboutSection = () => {

return (
<>
  <main className="max-w-5xl mx-auto space-y-16">
{/* Hero Section */}
    <div className="text-center space-y-6">
      <h1 className="text-4xl sm:text-7xl font-bold animate-slide-down">"Who am I?"</h1>
      <p className="text-lg text-muted-foreground animate-slide-up stagger-1">A question many make, but few answer.</p>
    </div>

{/* Story Section */}
    <section className="space-y-6 text-muted-foreground animate-slide-up stagger-3">
      <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>

      <p>I began my journey with a simple question: What if I could create, instead of just consuming?</p>

      <p>In a world saturated with AI, I felt the need for something different—something that prioritized depth over speed, quality over 
        quantity, and authentic connection over viral content.</p>

      <p>I took hands into the matter and learnt how to make that happen. One frustrating day after the other...</p>

    </section>

{/* Mission Section */}
    <section className="rounded-md bg-card p-12 hover:-translate-y-1 transition-all duration-500">
      <h2 className="text-3xl font-bold mb-6">My goals</h2>

      <div className="space-y-4 text-muted-foreground">

        <p>Make amazing webpages, that strike visually and are fully functional:</p>

        <ul className="space-y-3 ml-6">

          <li className="flex items-start"><span className="mr-2">•</span><span>Good coding practices</span></li>
          <li className="flex items-start"><span className="mr-2">•</span><span>Great communication</span></li>
          <li className="flex items-start"><span className="mr-2">•</span><span>Constant learning</span></li>
          <li className="flex items-start"><span className="mr-2">•</span><span>Embrace personal growth as a lifelong journey</span></li>

        </ul>

      </div>
    </section>

{/* Values Section */}
    <section className="">
      <h2 className="text-3xl font-bold mb-8">My Values</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 rounded-md bg-muted hover:-translate-y-0.5 transition-all duration-500">
          <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
          <p className="text-muted-foreground">I believe honesty and transparency are the cornerstone of every company.</p>
        </div>

        <div className="p-6 rounded-md bg-muted hover:-translate-y-0.5 transition-all duration-500">
          <h3 className="text-xl font-semibold mb-3">Thoughtfulness</h3>
          <p className="text-muted-foreground">Every line of code is thoughtfully written, and designed to add real value and functionality.</p>
        </div>

        <div className="p-6 rounded-md bg-muted hover:-translate-y-0.5 transition-all duration-500">
          <h3 className="text-xl font-semibold mb-3">Attention to detail</h3>
          <p className="text-muted-foreground">Every project deserves full dedication and hand-made components for that specific project.</p>
        </div>

        <div className="p-6 rounded-md bg-muted hover:-translate-y-0.5 transition-all duration-500">
          <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
          <p className="text-muted-foreground">Understandable code and reusable components.</p>
        </div>

      </div>
    </section>
  </main>
</>
);};

export default AboutSection;
