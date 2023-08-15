import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit {
  
  navigation: any;
  correctQuestions!: number;
  totalQuestions!: number;
  isGoodResult!: boolean;

  constructor( private router: Router) {
    this.navigation = this.router.getCurrentNavigation();
    this.correctQuestions = this.navigation.extras.state.correctQuestions;
    this.totalQuestions = this.navigation.extras.state.totalQuestions;
    this.isGoodResult = this.correctQuestions >= (this.totalQuestions/2);
  }

  ngOnInit() {
    // lógica das imagens
  }

  congratulations() {
    return this.isGoodResult ? 'Parabéns!' : 'Que pena!'
  }
}
