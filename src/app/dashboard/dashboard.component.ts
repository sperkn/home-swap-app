import { Component, OnInit } from "@angular/core";
import { TravelRoutesService } from "../services/travel-routes.service";
import { HttpClient } from "@angular/common/http";
import { HomeRoutesService } from "../services/home-routes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [HomeRoutesService]
})
export class DashboardComponent implements OnInit {
  homes:any=[]
  travels: any = [];

  constructor(
    private travel: TravelRoutesService,
    private home: HomeRoutesService
  ) {}

  ngOnInit() {
    this.home.getMyHome()
      .subscribe((homes) => {
        this.homes = homes;
      });

    this.travel.getTravel()
      .subscribe((travels) => {
        this.travels = travels;
      });
  }

  // addHome() {

  // }
}
