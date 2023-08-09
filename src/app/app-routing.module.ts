import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateQuizSuccessComponent } from './create-quiz-success/create-quiz-success.component';
import { CreateQuizErrorComponent } from './create-quiz-error/create-quiz-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quizzes',
    component: QuizzesComponent
  },
  {
    path: 'create-quiz',
    component: CreateQuizComponent
  },
  {
    path: 'success',
    component: CreateQuizSuccessComponent
  },
  {
    path: 'error',
    component: CreateQuizErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
