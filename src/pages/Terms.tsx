import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Terms of Service
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: March 20, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Perspective's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access the materials on Perspective's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on our website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Content</h2>
            <p className="text-muted-foreground">
              When you post comments or other content on our website, you grant us a non-exclusive, worldwide, 
              royalty-free license to use, reproduce, and display such content. You represent that you own or 
              have the necessary rights to the content you post.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">
              You may not use our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any harmful or malicious code</li>
              <li>To impersonate or attempt to impersonate Perspective or any employee</li>
              <li>To harass, abuse, or harm another person</li>
              <li>To spam or send unsolicited communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on Perspective, including articles, images, logos, and designs, is the property of 
              Perspective or its content creators and is protected by international copyright laws. 
              Unauthorized use of our content may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Perspective's website are provided on an "as is" basis. Perspective makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall Perspective or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of 
              the use or inability to use the materials on Perspective's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Links to Other Websites</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites that are not owned or controlled by Perspective. 
              We have no control over and assume no responsibility for the content, privacy policies, or practices 
              of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              Perspective may revise these Terms of Service at any time without notice. By using this website, 
              you are agreeing to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of the State of California, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              Email: legal@perspective.blog<br />
              Address: San Francisco, CA
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;
