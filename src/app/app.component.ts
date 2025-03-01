import { Component } from '@angular/core';
import { CommentComponent } from './components/comment/comment.component';
import { Comment } from './models/comment.model';
import { Avatar } from './models/avatar.model';

@Component({
  selector: 'app-root',
  imports: [CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  comment: Comment = {
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: '1 month ago',
    score: 12,
    user: {
      image: {
        png: 'images/avatars/image-amyrobson.png',
        webp: 'images/avatars/image-amyrobson.webp',
      } satisfies Avatar,
      username: 'amyrobson',
    },
  } satisfies Comment;
}
