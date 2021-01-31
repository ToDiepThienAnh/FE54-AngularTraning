import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://movie0706.cybersoft.edu.vn/api'

  constructor(private http: HttpClient) { }
  handleError(err: any) {
    console.log('error: ', err);
    switch (err.status) {
      case 500:
        console.log('Loi Server');

        break;
      case 401:
        // handle nếu đang login thì sẽ logout 
        console.log('Lỗi Unauthorized');
        break;
      default:
        break;
    }
    return throwError(err)
  }
  get<T>(path: string, options = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, options).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(path: string, body: any, options = {}): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(path: string, body: any, options = {}): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(path: string, options = {}): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, options).pipe(
      catchError(this.handleError)
    );
  }
}
