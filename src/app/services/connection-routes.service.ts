import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConnectionRoutesService {
  mainURL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}
  handleError(e) {
    return throwError(e.json().message);
  }

  addConnection(userRequest, otherUserRequest, dummyData) {
    return this.http
      .post(
        `${this.mainURL}/connection/${userRequest}/${otherUserRequest}`,
        dummyData,
        { withCredentials: true }
      )
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }

  getConnection() {
    return this.http
      .get(`${this.mainURL}/connection`, { withCredentials: true })
      .pipe(map(res => res.json()));
  }
}
