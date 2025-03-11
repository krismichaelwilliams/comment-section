import { Component, OnInit } from '@angular/core';
import { CommentComponent } from '../comments/comment/comment.component';
import type { Comment } from '../../models/comment.model';
import { Avatar } from '../../models/avatar.model';
import { CommentService } from '../../services/comment/comment.service';
import { User } from '../../models/user.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-view',
  imports: [CommentComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  comments!: Comment[];
  currentUser: User = {
    image: {
      png: './images/avatars/image-juliusomo.png',
      webp: './images/avatars/image-juliusomo.webp',
    } satisfies Avatar,
    username: 'juliusomo',
  } satisfies User;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService
      .getComments()
      .pipe(take(1))
      .subscribe((comments) => {
        this.comments = comments;
      });
  }
}
