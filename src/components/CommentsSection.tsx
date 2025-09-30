import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThumbsUp, Heart, MessageCircle } from "lucide-react";
import sarahAvatar from "@/assets/avatar-sarah.jpg";
import mikeAvatar from "@/assets/avatar-mike.jpg";
import johnAvatar from "@/assets/avatar-john.jpg";
import emmaAvatar from "@/assets/avatar-emma.jpg";
import davidAvatar from "@/assets/avatar-david.jpg";

interface Comment {
  id: string;
  name: string;
  time: string;
  message: string;
  likes: number;
  avatar?: string;
  replies?: Comment[];
}

const mockComments: Comment[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    time: "2h",
    message: "I won last time, this blessing came at a time where we needed it the most.",
    likes: 234,
    avatar: sarahAvatar,
    replies: [
      {
        id: "1-1",
        name: "John Davis",
        time: "1h", 
        message: "Just entered for the giveaway and completed the sponsored deals, will be getting mine tomorrow. Can't believe there's still people out there offering genuine help.",
        likes: 156,
        avatar: johnAvatar
      }
    ]
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    time: "3h",
    message: "Got my gift card yesterday, you guys are the truth!!!",
    likes: 189,
    avatar: mikeAvatar
  },
  {
    id: "3",
    name: "Emma Wilson",
    time: "5h",
    message: "This is legit! Received my cash payout faster than I expected. Thank you so much!",
    likes: 267,
    avatar: emmaAvatar
  },
  {
    id: "4",
    name: "David Miller",
    time: "1d",
    message: "Completed all the deals and got my $750 blessing. This really helped me out during tough times.",
    likes: 198,
    avatar: davidAvatar
  }
];

export function CommentsSection() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">f</span>
            </div>
            <span className="font-semibold text-primary">Facebook Comments</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {mockComments.map((comment) => (
            <div key={comment.id} className="space-y-3">
              <div className="flex space-x-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={comment.avatar} alt={comment.name} />
                  <AvatarFallback className="bg-muted">
                    {comment.name[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm text-foreground">
                        {comment.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {comment.message}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2 text-xs">
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Render replies */}
              {comment.replies && comment.replies.map((reply) => (
                <div key={reply.id} className="ml-12 flex space-x-3">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src={reply.avatar} alt={reply.name} />
                    <AvatarFallback className="bg-muted text-xs">
                      {reply.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm text-foreground">
                          {reply.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          · {reply.time}
                        </span>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        {reply.message}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-2 text-xs">
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{reply.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                        <span>Like</span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}