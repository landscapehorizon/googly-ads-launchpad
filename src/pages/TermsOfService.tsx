import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Legal Documents</h1>
          <p className="text-muted-foreground">Terms of Service and Privacy Policy</p>
        </div>

        <div className="space-y-8">
          {/* Terms of Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Terms of Service</CardTitle>
              <p className="text-sm text-muted-foreground">Effective Date: [Month Day, Year]</p>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="mb-6">
                These Terms of Service ("Terms") govern your use of Twelve Tribe's advertising automation platform and related services (the "Services"). By creating an account, subscribing to any plan, or using our platform, you agree to these Terms.
              </p>

              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Company Information</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Twelve Tribe LLC</p>
                    <p>28914 Roadside Dr, Ste 209</p>
                    <p>Agoura Hills, CA 91301</p>
                    <p>Incorporated in Delaware, USA</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Eligibility</h3>
                  <p className="text-sm text-muted-foreground">
                    You must be at least 18 years old and operate a legally registered business to use the Services. Twelve Tribe currently serves customers in the United States, Canada, the United Kingdom, and the European Union.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Services Provided</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Twelve Tribe provides an AI-driven advertising automation platform designed to create, manage, and optimize Google Ads campaigns on behalf of customers. Our AI system continually monitors and adjusts ad copy, bids, targeting, and budgets to maximize performance.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    While our platform uses advanced AI to optimize campaigns, we do not guarantee specific results, lead volume, or sales outcomes. Ad performance is influenced by numerous factors outside our control.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Verification Requirement</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Google requires advertisers to complete a <strong>business identity verification process</strong> before ads can run. You agree to provide accurate and truthful documentation, including but not limited to:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                    <li>W-9 Form</li>
                    <li>IRS-issued document with your business name, address, and EIN</li>
                    <li>Government-issued photo ID (Driver's License or Passport)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    This documentation is required to activate your campaigns.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Payment Terms</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our subscription tiers are billed monthly via Stripe. Plans and pricing are available on our website.
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                    <li>No refunds are provided <strong>after the verification process is complete</strong>.</li>
                    <li>Subscriptions can be canceled at any time, and you will not be charged for future billing cycles.</li>
                    <li>Ad spend is separate from subscription fees and billed according to your selected plan and budget.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Cancellations & Pauses</h3>
                  <p className="text-sm text-muted-foreground">
                    If you cancel your subscription, your campaigns will be paused immediately. You may restart by resubscribing at any time.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">7. Prohibited Uses</h3>
                  <p className="text-sm text-muted-foreground mb-3">You may not use our Services for:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                    <li>Illegal, deceptive, or fraudulent advertising</li>
                    <li>Ads promoting restricted or prohibited products per Google Ads policies</li>
                    <li>Misrepresentation of your business identity or products</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">8. Limitation of Liability</h3>
                  <p className="text-sm text-muted-foreground mb-3">Twelve Tribe is not responsible for:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1 mb-3">
                    <li>Business losses, missed opportunities, or reduced performance due to ad platform changes or third-party outages</li>
                    <li>Results that do not meet your expectations</li>
                    <li>Losses resulting from inaccurate or incomplete information you provide</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    To the maximum extent permitted by law, our liability is limited to the total subscription fees paid in the six (6) months prior to the event giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">9. Modifications to Services</h3>
                  <p className="text-sm text-muted-foreground">
                    We may update, improve, or modify the Services at any time. If we make material changes, we will provide notice via email or within your account dashboard.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">10. Governing Law</h3>
                  <p className="text-sm text-muted-foreground">
                    These Terms are governed by the laws of the State of Delaware, without regard to its conflicts of law provisions.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">11. Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about these Terms can be sent to:{" "}
                    <a href="mailto:support@twelvetribe.com" className="text-primary hover:underline">
                      support@twelvetribe.com
                    </a>
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              <p className="text-sm text-muted-foreground">Effective Date: January 1st, 2023</p>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
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
    </div>
  );
};

export default TermsOfService;