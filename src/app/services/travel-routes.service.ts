import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: "root"
})
export class TravelRoutesService {
  constructor(private http: Http) {}
  handleError(e) {
    return throwError(e.json().message);
  }

  addTravel(travelRequest) {
    return this.http
      .post(`${environment.BASE_URL}/api/travel`, travelRequest , { withCredentials: true })
      .pipe(
        map(res => res.json()),
        catchError(this.handleError)
      );
  }

  getTravel() {
    return this.http.get(`${environment.BASE_URL}/api/travel`, { withCredentials: true })
      .pipe(map((res:any) => {
        return res.json()}));
  }

  travelDetail(travelId) {
    return this.http.get(`${environment.BASE_URL}/api/travel/${travelId}`, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  editTravel(editedTravel, travelId) {
    return this.http.put(`${environment.BASE_URL}/api/travel/${travelId}`, editedTravel, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  deleteTravel(travelId) {
    return this.http.delete(`${environment.BASE_URL}/api/travel/${travelId}`, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  getResults(travelId) {
    return this.http.get(`${environment.BASE_URL}/api/travel/results/${travelId}`, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  like(userTravelId, otherTravelId) {
    return this.http.put(`${environment.BASE_URL}/api/travel/like/${otherTravelId}`, userTravelId, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  dislike(userTravelId, otherTravelId) {
    return this.http.put(`${environment.BASE_URL}/api/travel/dislike/${otherTravelId}`, userTravelId, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

  checkMatch(travelId, likedId) {
    return this.http.get(`${environment.BASE_URL}/api/travel/${travelId}/matchcheck/${likedId}`, { withCredentials: true })
      .pipe(map((res) => res.json()));
  }

}
