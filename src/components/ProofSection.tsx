import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function ProofSection() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Real Proof - Real Payouts
        </h2>
        <p className="text-muted-foreground">
          See actual payments we've sent to our members
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-200 w-full max-w-xs">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full border-4 border-success bg-background flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10 text-success" />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl font-semibold text-foreground">
                You sent $750
              </p>
              <p className="text-base text-muted-foreground">
                to Todd Essen
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}