import { Avatar } from './avatar.model';
import { CommentReply } from './comment-reply.model';
import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: CommentReply[];
}
