import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: January 1st, 2023</p>
        </div>

        <Card>
          <CardContent className="prose prose-sm max-w-none pt-6">
            <p className="mb-6">
              Twelve Tribe LLC ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                <p className="text-sm text-muted-foreground mb-3">We collect:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                  <li><strong>Personal Information:</strong> First and last name, email address, business address or billing address</li>
                  <li><strong>Verification Documents:</strong> W-9, EIN, government-issued photo ID, IRS-issued business documents (for Google Ads verification)</li>
                  <li><strong>Payment Information:</strong> Collected and processed securely via Stripe</li>
                  <li><strong>Advertising Data:</strong> Google Ads account information, campaign performance metrics</li>
                  <li><strong>Website Analytics:</strong> Data from Google Analytics or equivalent tracking tools</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
                <p className="text-sm text-muted-foreground mb-3">We use your information to:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Process payments and subscription renewals</li>
                  <li>Set up and optimize advertising campaigns</li>
                  <li>Complete Google Ads identity verification requirements</li>
                  <li>Provide analytics and reporting</li>
                  <li>Communicate with you about your account, campaigns, and marketing offers</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Sharing of Information</h3>
                <p className="text-sm text-muted-foreground mb-3">We do not sell or rent your information. We share data only with:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                  <li><strong>Stripe:</strong> For payment processing</li>
                  <li><strong>Google:</strong> For advertising and verification purposes</li>
                  <li><strong>Service Providers:</strong> That help us operate our platform (e.g., analytics tools)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Document Retention</h3>
                <p className="text-sm text-muted-foreground">
                  After your verification documents have been uploaded to Google and confirmed as processing, we delete these files from our system within a reasonable period (typically 30 days).
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Data Retention & Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  We do not permit deletion of customer account data due to compliance and reporting requirements. You may unsubscribe from marketing emails at any time.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">6. Cookies & Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies and tracking technologies for site functionality, analytics, and improving user experience.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">7. Security</h3>
                <p className="text-sm text-muted-foreground">
                  We implement industry-standard security measures to protect your data, including encryption of stored documents and secure transmission protocols.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">8. International Data Transfers</h3>
                <p className="text-sm text-muted-foreground">
                  If you are located outside the United States, your information may be transferred to and processed in the U.S., Canada, the UK, or the EU in compliance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">9. Your Rights</h3>
                <p className="text-sm text-muted-foreground mb-3">Depending on your location, you may have the right to:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">10. Contact</h3>
                <p className="text-sm text-muted-foreground">
                  Questions about this Privacy Policy can be sent to:{" "}
                  <a href="mailto:privacy@twelvetribe.com" className="text-primary hover:underline">
                    privacy@twelvetribe.com
                  </a>
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;