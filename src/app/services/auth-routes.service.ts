import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: "root"
})
export class AuthRoutesService {
  // mainURL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}
  handleError(e) {
    return throwError(e.json().message);
  }

  signup(user) {
    return this.http.post(`${environment.BASE_URL}/api/signup`, user).pipe(
      map(res => res.json()),
      catchError(this.handleError)
    );
  }

  login(user) {
    return this.http
      .post(`${environment.BASE_URL}/api/login`, user, { withCredentials: true })
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }

  isLoggedIn() {
    return this.http
      .get(`${environment.BASE_URL}/api/loggedin`, { withCredentials: true })
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }

  logout() {
    return this.http.post(`${environment.BASE_URL}/api/logout`, {}, {withCredentials: true}).pipe(map(res => res.json()), catchError(this.handleError));
  }
}
