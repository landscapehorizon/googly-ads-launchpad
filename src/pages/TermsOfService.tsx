import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Effective Date: January 1st, 2023</p>
        </div>

        <Card>
          <CardContent className="prose prose-sm max-w-none pt-6">
            <p className="mb-6">
              These Terms of Service ("Terms") govern your use of Twelve Tribe's advertising automation platform and related services (the "Services"). By creating an account, subscribing to any plan, or using our platform, you agree to these Terms.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">1. Company Information</h3>
                <div className="text-sm text-muted-foreground">
                  <p>Twelve Tribe</p>
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
                  Google requires advertisers to complete a business identity verification process before ads can run. You agree to provide accurate and truthful documentation, including but not limited to:
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
                  <li>No refunds are provided after the verification process is complete.</li>
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
                  <a href="mailto:support@twelvetribeads.com" className="text-primary hover:underline">
                    support@twelvetribeads.com
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

export default TermsOfService;