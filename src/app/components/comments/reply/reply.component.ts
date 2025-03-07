import { Component, Input, input } from '@angular/core';
import { CommentReply } from '../../../models/comment-reply.model';

@Component({
  selector: 'app-reply',
  imports: [],
  templateUrl: './reply.component.html',
  styleUrl: '../comments.scss',
})
export class ReplyComponent {
  loggedInUser: string = 'juliusomo';
  @Input({ required: true }) reply!: CommentReply;
}
