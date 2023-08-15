import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../interfaces/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  endpoint: string = 'http://localhost:3000';
  quiz!: Quiz;

  constructor( private http: HttpClient ) { }

  setQuiz(quiz: Quiz) {
    this.quiz = quiz;
  }

  getQuiz() {
    return this.quiz;
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.endpoint}/quizes`, quiz);
  }

  getQuizzes() {
    return this.http.get<Quiz[]>(`${this.endpoint}/quizes`);
  }

  getQuizById(id: number) {
    return this.http.get<Quiz>(`${this.endpoint}/quizes/${id}`)
  }
}
