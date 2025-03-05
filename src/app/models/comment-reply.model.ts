import { Avatar } from './avatar.model';

export interface CommentReply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: Avatar;
    username: string;
  };
}
