import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public get(url: string): Observable<Response> {
        return this.http.get<Response>(url)
        .pipe(
            retry(1),
            catchError(this.httpError)
        );
    }

    public post(url: string, data): Observable<any> {
        return this.http.post(url, data)
        .pipe(
            retry(1),
            catchError(this.httpError)
        );;
    }

    public httpError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }

}