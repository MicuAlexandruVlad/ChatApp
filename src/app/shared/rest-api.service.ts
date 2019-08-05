import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + '/user/register-user/', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
