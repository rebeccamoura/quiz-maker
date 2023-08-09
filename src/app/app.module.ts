import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateQuizSuccessComponent } from './create-quiz-success/create-quiz-success.component';
import { CreateQuizErrorComponent } from './create-quiz-error/create-quiz-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    QuizzesComponent,
    QuizCardComponent,
    CreateQuizComponent,
    CreateQuizSuccessComponent,
    CreateQuizErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
