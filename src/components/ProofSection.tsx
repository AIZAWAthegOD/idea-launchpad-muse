import { Card, CardContent } from "@/components/ui/card";

export function ProofSection() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Backed by Weekly Sponsors
        </h2>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <p className="text-base text-foreground text-center leading-relaxed mb-4">
            We partner with multiple sponsors, and each of them funds weekly giveaways. That means new chances are always coming.
          </p>
          <p className="text-base text-foreground text-center leading-relaxed">
            👉 Make sure you follow us and keep checking back for the next blessing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}