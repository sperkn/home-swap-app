import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: "root"
})
export class ConnectionRoutesService {
  // mainURL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}
  handleError(e) {
    return throwError(e.json().message);
  }

  addConnection(userRequest, otherUserRequest, dummyData) {
    return this.http
      .post(
        `${environment.BASE_URL}/api/connection/${userRequest}/${otherUserRequest}`,
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
      .get(`${environment.BASE_URL}/api/connection`, { withCredentials: true })
      .pipe(map(res => res.json()));
  }

  getConnectionDetails(connectionId) {
    return this.http
      .get(`${environment.BASE_URL}/api/connection/${connectionId}`, { withCredentials: true })
      .pipe(map(res => res.json()));
  }

  acceptConnection(connectionId){
    return this.http.put(`${environment.BASE_URL}/api/connection/accept`, connectionId, { withCredentials: true })
    .pipe(map((res) => res.json()));
  }

  declineConnection(connectionId){
    return this.http.put(`${environment.BASE_URL}/api/connection/decline`, connectionId, { withCredentials: true })
    .pipe(map((res) => res.json()));
  }
  
  privateInfo(userId){
    return this.http.get(`${environment.BASE_URL}/api/confirmed-data/${userId}`, { withCredentials: true })
    .pipe(map((res) => res.json()));
  }
}

