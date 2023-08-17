import { Component, Input } from '@angular/core';
import { Quiz } from '../interfaces/quiz';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {

  @Input() quiz!: Quiz;

  constructor( private quizService: QuizService, private router: Router ) {}

  onPlay() {
    this.quizService.setQuiz(this.quiz);
    this.router.navigateByUrl(`/quiz/${this.quiz.id}`)
  }

}
