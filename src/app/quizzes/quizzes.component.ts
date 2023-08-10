import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../interfaces/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes$: Observable<Quiz[]>;

  constructor( private quizService: QuizService ) {
    this.quizzes$ = this.quizService.getQuizzes()
  }

  ngOnInit() {
    console.log(this.quizzes$)
  }

}
