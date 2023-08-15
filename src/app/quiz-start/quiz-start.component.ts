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

  quizId!: number;
  quiz$!: Observable<Quiz>;

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private quizService: QuizService, private router: Router ) {
    this.route.params.subscribe((params) => {
      this.quizId = params['id']
    })

    this.quiz$ = this.quizService.getQuizById(this.quizId);
  }

  onStartQuiz() {
    this.quiz$.subscribe((quiz: Quiz) => {
      this.quizService.setQuiz(quiz)
      this.router.navigate(['play'])
    })
  }
}
