import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ProofCard {
  id: string;
  amount: number;
  recipient: string;
  type: "sent" | "received";
}

const mockProofs: ProofCard[] = [
  { id: "1", amount: 500, recipient: "Todd Essen", type: "sent" },
  { id: "2", amount: 325, recipient: "Maria Garcia", type: "sent" },
  { id: "3", amount: 750, recipient: "Alex Thompson", type: "sent" }
];

export function ProofSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Real Proof - Real Payouts
        </h2>
        <p className="text-muted-foreground">
          See actual payments we've sent to our members
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProofs.map((proof) => (
          <Card key={proof.id} className="bg-card border-border hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <CheckCircle2 className="h-16 w-16 text-success mx-auto animate-pulse-glow" />
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  You sent ${proof.amount}
                </p>
                <p className="text-sm text-muted-foreground">
                  to {proof.recipient}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                  ✓ Payment Confirmed
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center">
          <div className="mb-3">
            <CheckCircle2 className="h-12 w-12 text-success mx-auto" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Instant Access</h3>
          <p className="text-sm text-muted-foreground">
            Start earning immediately after verification
          </p>
        </div>
        
        <div className="text-center">
          <div className="mb-3">
            <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center mx-auto">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground mb-2">No Investment Required</h3>
          <p className="text-sm text-muted-foreground">
            100% free to join and participate
          </p>
        </div>
        
        <div className="text-center">
          <div className="mb-3">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Making up to $2000+ per month</h3>
          <p className="text-sm text-muted-foreground">
            Top earners consistently hit high targets
          </p>
        </div>
      </div>
    </div>
  );
}