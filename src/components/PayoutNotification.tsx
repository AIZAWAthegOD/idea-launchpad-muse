import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import coupleAvatar1 from "@/assets/avatar-couple1.jpg";
import coupleAvatar2 from "@/assets/avatar-couple2.jpg";

interface PayoutData {
  id: string;
  name: string;
  amount: number;
  location: string;
  avatar?: string;
}

const mockPayouts: PayoutData[] = [
  { id: "1", name: "Robert Williams", amount: 623, location: "Dallas" },
  { id: "2", name: "Jennifer Martinez", amount: 575, location: "Miami" },
  { id: "3", name: "Christopher Brown", amount: 734, location: "Chicago", avatar: coupleAvatar1 },
  { id: "4", name: "Amanda Taylor", amount: 689, location: "Phoenix" },
  { id: "5", name: "Daniel Garcia", amount: 567, location: "Atlanta", avatar: coupleAvatar2 }
];

export function PayoutNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show for 5 seconds
    const showTimeout = setTimeout(() => {
      setIsVisible(false);
      
      // Hide for 17 seconds, then show next
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mockPayouts.length);
        setIsVisible(true);
      }, 17000);
    }, 5000);

    return () => clearTimeout(showTimeout);
  }, [currentIndex]);

  const currentPayout = mockPayouts[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-down">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm mx-auto animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={currentPayout.avatar} alt={currentPayout.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {currentPayout.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                <span className="font-semibold">{currentPayout.name}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                received payout of{" "}
                <span className="font-bold text-success">${currentPayout.amount}</span>{" "}
                from {currentPayout.location}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}