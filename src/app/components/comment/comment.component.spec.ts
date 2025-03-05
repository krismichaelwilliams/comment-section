import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';
import { Avatar } from '../../models/avatar.model';
import { Comment } from '../../models/comment.model';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = {
      id: 1,
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
      replies: [],
    } satisfies Comment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
