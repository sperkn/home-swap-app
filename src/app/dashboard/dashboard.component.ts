import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeRoutesService } from '../services/home-routes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HomeRoutesService]
})
export class DashboardComponent implements OnInit {
  homes:any=[]
  // homes;

  constructor(private home: HomeRoutesService) { }

  ngOnInit() {
    console.log(this.homes);
    this.home.getMyHome()
      .subscribe((homes) => {
        this.homes = homes;
      });
  }

  // addHome() {

  // }
}
