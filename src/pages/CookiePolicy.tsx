import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground">Effective Date: January 1st, 2023</p>
        </div>

        <Card>
          <CardContent className="prose prose-sm max-w-none pt-6">
            <p className="mb-6">
              This Cookie Policy explains how Twelve Tribe LLC ("we," "our," "us") uses cookies and similar tracking technologies when you visit our website or use our platform.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. What Are Cookies?</h3>
                <p className="text-sm text-muted-foreground">
                  Cookies are small text files stored on your device when you visit a website. They help us improve your browsing experience by remembering your preferences and enabling certain functionality.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-medium mb-2">a) Essential Cookies</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                      <li>Necessary for the website to function properly.</li>
                      <li>Enable features like account login, secure payment processing, and form submissions.</li>
                      <li>Cannot be disabled through our cookie banner (but you can block them in your browser, which may break site functionality).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-medium mb-2">b) Performance & Analytics Cookies</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                      <li>Help us understand how visitors interact with our website.</li>
                      <li>We use tools such as Google Analytics to track website traffic, page views, and user behavior to improve our services.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-medium mb-2">c) Functional Cookies</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                      <li>Remember your preferences (such as language or region).</li>
                      <li>Improve the user experience by personalizing content.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-medium mb-2">d) Advertising & Targeting Cookies</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                      <li>Used to deliver relevant ads on Google and other platforms.</li>
                      <li>May be set by us or third-party providers (e.g., Google Ads) to track ad performance and conversions.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Third-Party Cookies</h3>
                <p className="text-sm text-muted-foreground mb-3">Some cookies are placed by third parties on our behalf, such as:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1 mb-3">
                  <li><strong>Google Ads & Google Analytics</strong> – For ad tracking and analytics</li>
                  <li><strong>Stripe</strong> – For secure payment processing</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  These third parties may use cookies to collect information about your online activities over time and across different websites.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. How to Manage Cookies</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You can control or delete cookies through your browser settings. For example:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1 mb-3">
                  <li><strong>Chrome:</strong> Manage Cookies</li>
                  <li><strong>Firefox:</strong> Manage Cookies</li>
                  <li><strong>Safari:</strong> Manage Cookies</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Please note:</strong> Disabling certain cookies may impact site functionality and limit your ability to use our services.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Changes to This Policy</h3>
                <p className="text-sm text-muted-foreground">
                  We may update this Cookie Policy from time to time. Changes will be posted here with a new effective date.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">6. Contact</h3>
                <p className="text-sm text-muted-foreground">
                  If you have questions about our use of cookies, please email us at:{" "}
                  <a href="mailto:privacy@twelvetribeads.com" className="text-primary hover:underline">
                    privacy@twelvetribeads.com
                  </a>
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
        
        {/* Back Navigation */}
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Previous Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;