import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, DollarSign, Bitcoin } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  selected: boolean;
}

export function PaymentMethods() {
  const [methods, setMethods] = useState<PaymentMethod[]>([
    {
      id: "giftcards",
      name: "Gift Cards",
      icon: <CreditCard className="h-5 w-5" />,
      selected: false
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <div className="h-5 w-5 bg-primary rounded text-primary-foreground flex items-center justify-center text-xs font-bold">P</div>,
      selected: false
    },
    {
      id: "cashapp",
      name: "CashApp",
      icon: <DollarSign className="h-5 w-5 text-success" />,
      selected: true
    },
    {
      id: "crypto",
      name: "Crypto",
      icon: <Bitcoin className="h-5 w-5 text-warning" />,
      selected: false
    }
  ]);

  const toggleMethod = (id: string) => {
    setMethods(prev => 
      prev.map(method => ({
        ...method,
        selected: method.id === id
      }))
    );
  };

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
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              method.selected 
                ? 'ring-2 ring-primary border-primary bg-primary/5' 
                : 'border-border hover:border-primary/30'
            }`}
            onClick={() => toggleMethod(method.id)}
          >
            <CardContent className="flex items-center space-x-3 p-4">
              <Checkbox
                checked={method.selected}
                onChange={() => toggleMethod(method.id)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="flex-shrink-0">
                {method.icon}
              </div>
              <span className="font-medium text-foreground">
                {method.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3 pt-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
          Click Here to Sign Up
        </Button>
        
        <Card className="bg-warning/10 border-warning/20">
          <CardContent className="p-3">
            <p className="text-sm font-semibold text-warning-foreground text-center">
              You Must Verify Your Email After Sign Up
            </p>
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