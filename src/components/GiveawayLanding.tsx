import { PayoutNotification } from "./PayoutNotification";
import { PaymentMethods } from "./PaymentMethods";
import { CommentsSection } from "./CommentsSection";
import { ProofSection } from "./ProofSection";

export function GiveawayLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating notification */}
      <PayoutNotification />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get Your <span className="text-primary">$750</span> 
              <br />
              <span className="text-success">Blessing Today</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of members who've already received their payouts. 
              No investment required, instant access guaranteed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <span>✓</span>
                <span>100% Free to Join</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span>⚡</span>
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center space-x-2 bg-warning/10 text-warning-foreground px-4 py-2 rounded-full">
                <span>🎯</span>
                <span>No BS Policy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-12">
          <PaymentMethods />
        </section>

        {/* Proof Section */}
        <section className="py-12">
          <ProofSection />
        </section>

        {/* Comments Section */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              What Our Community Is Saying
            </h2>
            <p className="text-muted-foreground">
              Real people, real experiences
            </p>
          </div>
          <CommentsSection />
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-muted/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 $750 Blessing Project. Changing lives, one payout at a time.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            All payouts are real and verified. Join thousands of satisfied members.
          </p>
        </div>
      </footer>
    </div>
  );
}