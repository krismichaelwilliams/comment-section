import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { Comment } from '../../models/comment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://localhost:7089/Comments');
  }
}
