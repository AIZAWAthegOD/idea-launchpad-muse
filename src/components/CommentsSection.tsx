import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThumbsUp, Heart, MessageCircle } from "lucide-react";

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
    name: "Sarah",
    time: "2h",
    message: "I won last time, this blessing came at a time where we needed it the most.",
    likes: 5,
    avatar: "",
    replies: [
      {
        id: "1-1",
        name: "John",
        time: "1h", 
        message: "Just entered for the giveaway and completed the sponsored deals, will be getting mine tomorrow. Can't believe there's still people out there offering genuine help.",
        likes: 3,
        avatar: ""
      }
    ]
  },
  {
    id: "2",
    name: "Mike",
    time: "3h",
    message: "Got my gift card yesterday, you guys are the truth!!!",
    likes: 7,
    avatar: ""
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