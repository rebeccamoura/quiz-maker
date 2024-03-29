import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import { Answer, Question, Quiz } from '../interfaces/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  quiz!: Quiz;
  questions!: Question[];
  currentQuestion: number = 0;
  correctQuestions: number = 0;

  myArray = [1, 2, 3, 4, 5];

  constructor( private quizService: QuizService, private router: Router ) {
    this.quiz = this.quizService.getQuiz();
    this.questions = this.quiz.questions
  }

  shuffleAnswers(answers: Answer[]) {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }

    return shuffledAnswers;
  }

  validateAnswer(isCorrect: any) {
    if (isCorrect) {
      this.correctQuestions++
    }

    this.currentQuestion >= this.questions.length - 1 ? this.showResults() : this.currentQuestion++
  }

  showResults() {
    this.router.navigate(['results'], {
      state: {
        correctQuestions: this.correctQuestions,
        totalQuestions: this.quiz.questions.length
      }
    })
  }
}
