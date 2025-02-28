import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentComponent } from "./components/comment/comment.component";

@Component({
  selector: 'app-root',
  imports: [CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comment-section';
}
