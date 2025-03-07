import { Component, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
import { Avatar } from '../../../models/avatar.model';
import { ReplyComponent } from '../reply/reply.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: '../comments.scss',
  imports: [ReplyComponent],
})
export class CommentComponent {
  @Input({ required: true }) comment!: Comment;
}
