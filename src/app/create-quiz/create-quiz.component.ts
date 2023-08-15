import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Quiz } from '../interfaces/quiz';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {

  quizForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    questions: this.fb.array([
      this.fb.group({
        question: ['', [Validators.required]],
        answers: this.fb.array([
          this.fb.group({
            answer: ['', [Validators.required]],
            isCorrect: true
          }),
          this.fb.group({
            answer: ['', [Validators.required]],
            isCorrect: false
          }),
          this.fb.group({
            answer: ['', [Validators.required]],
            isCorrect: false
          }),
          this.fb.group({
            answer: ['', [Validators.required]],
            isCorrect: false
          })
        ])
      })
    ])
  });

  constructor( private fb: FormBuilder, private quizService: QuizService, private router: Router ) {}

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  getAnswers(index: number) {
    return this.questions.controls[index].get('answers') as FormArray;
  }

  addQuestion() {
    this.questions.push(this.fb.group({
      question: ['', [Validators.required]],
      answers: this.fb.array([
        this.fb.group({
          answer: ['', [Validators.required]],
          isCorrect: true
        }),
        this.fb.group({
          answer: ['', [Validators.required]],
          isCorrect: false
        }),
        this.fb.group({
          answer: ['', [Validators.required]],
          isCorrect: false
        }),
        this.fb.group({
          answer: ['', [Validators.required]],
          isCorrect: false
        })
      ])
    }))
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index)
  }
  
  onSubmit(): void {
    this.quizService.createQuiz(this.quizForm.value as Quiz).subscribe(success => {
      this.router.navigate(['/success'])
    },
    error => {
      this.router.navigate(['/error'])
    })
  }

  onCancel() {
    this.router.navigate(['home'])
  }
}
