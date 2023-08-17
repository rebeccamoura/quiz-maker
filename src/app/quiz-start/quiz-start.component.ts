import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Observable } from 'rxjs';
import { Quiz } from '../interfaces/quiz';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent {

  quizIdByUrl!: number;
  quiz!: Quiz;

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private quizService: QuizService ) {
    this.route.params.subscribe((params) => {
      this.quizIdByUrl = params['id']
    })

    this.quiz = this.quizService.getQuiz();

    if (this.quiz?.id !== Number(this.quizIdByUrl)) {
      this.quizService.getQuizById(this.quizIdByUrl).subscribe((quiz) => {
        this.quiz = quiz;
        this.quizService.setQuiz(quiz);
      })
    }
  }
}
