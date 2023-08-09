import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizErrorComponent } from './create-quiz-error.component';

describe('CreateQuizErrorComponent', () => {
  let component: CreateQuizErrorComponent;
  let fixture: ComponentFixture<CreateQuizErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuizErrorComponent]
    });
    fixture = TestBed.createComponent(CreateQuizErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
