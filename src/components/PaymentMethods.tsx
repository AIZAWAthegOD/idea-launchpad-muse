import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, DollarSign } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  buttonText: string;
  link: string;
}

export function PaymentMethods() {
  const methods: PaymentMethod[] = [
    {
      id: "giftcards",
      name: "Gift Cards",
      icon: <CreditCard className="h-5 w-5" />,
      buttonText: "Click Here to Claim Giftcard",
      link: "#" // Add your giftcard link here
    },
    {
      id: "cashapp",
      name: "CashApp",
      icon: <DollarSign className="h-5 w-5 text-success" />,
      buttonText: "Click Here to Claim Cash",
      link: "#" // Add your cashapp link here
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Please choose the way you want to claim your $750
        </h2>
        <p className="text-sm text-muted-foreground">
          Select your preferred payout method(s) below and sign up
        </p>
      </div>

      <div className="space-y-3">
        {methods.map((method) => (
          <Card 
            key={method.id}
            className="border-border transition-all duration-200 hover:shadow-md hover:border-primary/30"
          >
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {method.icon}
                </div>
                <span className="font-medium text-foreground">
                  {method.name}
                </span>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.location.href = method.link}
              >
                {method.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-6">
        <Card className="bg-muted/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              How to Claim Your $750
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Enter your email</span> – so we know where to send your blessing.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Complete 3–5 sponsored deals</span> – this is how we keep the community going and ensure help reaches those who truly need it.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Receive your payout</span> – once your steps are done, your $750 blessing is processed instantly.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-4">
        <p className="text-lg font-medium italic text-muted-foreground">
          "Instant Payouts No BS"
        </p>
      </div>
    </div>
  );
}