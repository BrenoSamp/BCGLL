import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'https://backend-4wsv.onrender.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // Create

  createReview(data): Observable<any> {
    let url = `${this.baseUri}/avaliacoes/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createGame(data): Observable<any> {
    let url = `${this.baseUri}/games/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createUser(data): Observable<any> {
    let url = `${this.baseUri}/usuarios/signup`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getReviews(id): Observable<any> {
    let url = `${this.baseUri}/avaliacoes/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getConsoles(): Observable<any> {
    let url = `${this.baseUri}/consoles`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }


  getGames(id): Observable<any> {
    let url = `${this.baseUri}/games/list-most-rated/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getGamesByName(id, nome): Observable<any> {
    let url = `${this.baseUri}/games/list-filtered/${id}?nome=${nome}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getGamesByDev(id, desenvolvedor): Observable<any> {
    let url = `${this.baseUri}/games/list-filtered/${id}?desenvolvedor=${desenvolvedor}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getGamesByGen(id, genero): Observable<any> {
    let url = `${this.baseUri}/games/list-filtered/${id}?genero=${genero}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  updateReview(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }


  userLogin(data): Observable<any> {
    let url = `${this.baseUri}/usuarios/login`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}