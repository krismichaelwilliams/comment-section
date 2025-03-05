import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CommentService } from './comment.service';
import { Fakes } from '../../helpers/fakes';

describe('CommentService', () => {
  let service: CommentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CommentService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP GET request to fetch comments', () => {
    const expectedComments = Fakes.getFakeComments();

    service.getComments().subscribe((comments) => {
      expect(comments).toEqual(expectedComments);
    });

    const req = httpTestingController.expectOne(
      'https://localhost:7089/Comments'
    );
    expect(req.request.method).toBe('GET');
    req.flush(expectedComments);
  });
});
