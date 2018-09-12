import { Component, OnInit } from '@angular/core';
import { TravelRoutesService } from "../services/travel-routes.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private travel: TravelRoutesService) {}

  travels :any;

  ngOnInit() {
    this.travel.getTravel()
    .subscribe((travels) => {
      this.travels = travels;
    });  }

}
