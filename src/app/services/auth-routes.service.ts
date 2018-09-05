import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthRoutesService {

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get(`${environment.BASE_URL}/api/login`);
  }
}
