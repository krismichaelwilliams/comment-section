import { Avatar } from './avatar.model';

export interface Comment {
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: Avatar;
    username: string;
  };
}
