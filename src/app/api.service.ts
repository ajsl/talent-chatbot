import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getResponse(question: string): Observable<string> {
    const url = "http://localhost:3000/api/benefits-answers";
    const params = new HttpParams().set('question', question);
    return this.httpClient.post(url, params, {responseType: 'text'});
  }

  getMessages(userId: number): Observable<any> {
    const url = `http://localhost:3000/api/messages/${userId}`;
    return this.httpClient.get(url);
  }

  getUser(userId: number): Observable<any> {
    const url = `http://localhost:3000/api/user/${userId}`;
    return this.httpClient.get(url);
  }
}
