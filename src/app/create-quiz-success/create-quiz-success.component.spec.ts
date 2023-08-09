import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizSuccessComponent } from './create-quiz-success.component';

describe('CreateQuizSuccessComponent', () => {
  let component: CreateQuizSuccessComponent;
  let fixture: ComponentFixture<CreateQuizSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuizSuccessComponent]
    });
    fixture = TestBed.createComponent(CreateQuizSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
