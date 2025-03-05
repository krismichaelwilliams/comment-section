import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { CommentService } from '../../services/comment/comment.service';
import { of } from 'rxjs';
import type { Comment } from '../../models/comment.model';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Fakes } from '../../helpers/fakes';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let commentServiceSpy: jasmine.SpyObj<CommentService>;
  let mockComments: Comment[];

  beforeEach(async () => {
    // Arrange
    mockComments = Fakes.getFakeComments();
    commentServiceSpy = jasmine.createSpyObj('CommentService', ['getComments']);
    commentServiceSpy.getComments.and.returnValue(of(mockComments));

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getComments on init and set comments equal to the return value', () => {
    fixture.detectChanges();
    expect(commentServiceSpy.getComments).toHaveBeenCalledTimes(1);
    expect(component.comments).toEqual(mockComments);
  });
});
