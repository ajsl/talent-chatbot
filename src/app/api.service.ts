import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getResponse(question: string): Observable<string> {
    const url = "http://localhost:3000/api/benefits-answers";
    return this.httpClient.post(url, question, {responseType: 'text'});
  }
}
