import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

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

  constructor( private fb: FormBuilder) {}

  onSubmit() {
    console.log('enviado!: ', this.quizForm.value)
  }

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

}
