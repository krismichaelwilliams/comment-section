import type { Comment } from '../models/comment.model';
import type { CommentReply } from '../models/comment-reply.model';
import { Random } from 'random-test-values';

export class Fakes {
  static getFakeComments(): Comment[] {
    let comments: Comment[] = [];
    for (let i = 0; i < 3; i++) {
      comments.push({
        id: Random.Number(),
        content: Random.String(),
        createdAt: Random.String(),
        score: Random.Number(),
        user: {
          image: {
            png: Random.String(),
            webp: Random.String(),
          },
          username: Random.String(),
        },
        replies: this.getFakeReplies(),
      } satisfies Comment);
    }
    return comments;
  }

  static getFakeReplies(): CommentReply[] {
    let replies: CommentReply[] = [];
    for (let i = 0; i < 3; i++) {
      if (Random.Boolean()) {
        replies.push({
          id: Random.Number(),
          content: Random.String(),
          createdAt: Random.String(),
          score: Random.Number(),
          replyingTo: Random.String(),
          user: {
            image: {
              png: Random.String(),
              webp: Random.String(),
            },
            username: Random.String(),
          },
        } satisfies CommentReply);
      }
    }
    return replies;
  }

  static getFakeReply(): CommentReply {
    return {
      id: Random.Number(),
      content: Random.String(),
      createdAt: Random.String(),
      score: Random.Number(),
      replyingTo: Random.String(),
      user: {
        image: {
          png: Random.String(),
          webp: Random.String(),
        },
        username: Random.String(),
      },
    } satisfies CommentReply;
  }
}
