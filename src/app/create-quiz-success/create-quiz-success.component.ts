import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz-success',
  templateUrl: './create-quiz-success.component.html',
  styleUrls: ['./create-quiz-success.component.scss']
})
export class CreateQuizSuccessComponent {
  navigation: any;
  quizId!: number;

  constructor ( private router: Router ) {
    // this.navigation = this.router.getCurrentNavigation();
    // this.quizId = this.navigation.extras.state.quizId;
  }

  goToQuiz() {
    this.router.navigate(['quiz', this.quizId]);
  }
}
