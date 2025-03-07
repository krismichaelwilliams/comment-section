import { Component, OnInit } from '@angular/core';
import { CommentComponent } from '../comments/comment/comment.component';
import type { Comment } from '../../models/comment.model';
import { Avatar } from '../../models/avatar.model';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-view',
  imports: [CommentComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  comments!: Comment[];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
