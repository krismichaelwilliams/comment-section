import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplyComponent } from './reply.component';
import { Fakes } from '../../helpers/fakes';

describe('ReplyComponent', () => {
  let component: ReplyComponent;
  let fixture: ComponentFixture<ReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyComponent);
    component = fixture.componentInstance;
    component.reply = Fakes.getFakeReply();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
