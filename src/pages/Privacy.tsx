import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last updated: March 20, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              At Perspective, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and subscribe to our newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Comment on our articles</li>
              <li>Create an account on our website</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              This information may include your name, email address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground">
              When you visit our website, we may automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              installed on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Send you our newsletter and marketing communications</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our website and content</li>
              <li>Analyze usage patterns and trends</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity on our website and store 
              certain information. You can instruct your browser to refuse all cookies or to indicate when 
              a cookie is being sent. However, if you do not accept cookies, you may not be able to use 
              some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, please note that no method of transmission over the Internet 
              or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to rectification of inaccurate information</li>
              <li>The right to erasure of your personal information</li>
              <li>The right to withdraw consent</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these third-party sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              Email: privacy@perspective.blog<br />
              Address: San Francisco, CA
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
