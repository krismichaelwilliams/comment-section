import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { CommentService } from '../../services/comment/comment.service';
import { of, Subject, timer } from 'rxjs';
import type { Comment } from '../../models/comment.model';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Fakes } from '../../helpers/fakes';
import { Avatar } from '../../models/avatar.model';
import { User } from '../../models/user.model';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let commentServiceSpy: jasmine.SpyObj<CommentService>;
  let commentServiceSubject: Subject<any>;

  beforeEach(async () => {
    // Arrange
    commentServiceSpy = jasmine.createSpyObj('CommentService', ['getComments']);
    commentServiceSubject = new Subject<Comment[]>();
    commentServiceSpy.getComments.and.returnValue(commentServiceSubject);

    await TestBed.configureTestingModule({
      imports: [ViewComponent],
      providers: [
        { provide: CommentService, useValue: commentServiceSpy },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getComments on init and set comments equal to the return value', fakeAsync(() => {
    const mockComments = Fakes.getFakeComments();

    timer(1000).subscribe(() => commentServiceSubject.next(mockComments));
    tick(2000);

    expect(commentServiceSpy.getComments).toHaveBeenCalledTimes(1);
    expect(component.comments).toEqual(mockComments);
  }));
});
