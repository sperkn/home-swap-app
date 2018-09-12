import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TravelRoutesService {
  mainURL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}
  handleError(e) {
    return throwError(e.json().message);
  }

  addTravel(travelRequest) {
    return this.http
      .post(`${this.mainURL}/travel`, travelRequest , { withCredentials: true })
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }
  getTravel() {
    return this.http
      .get(`${this.mainURL}/travel`, { withCredentials: true })
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }
}
