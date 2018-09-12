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
  // homes:any=[]
  // travels: any;
  travels: any = [];

  constructor(
    private travel: TravelRoutesService,
    private home: HomeRoutesService
  ) {}

  ngOnInit() {
    // console.log(this.homes);
    // this.home.getMyHome()
    //   .subscribe((homes) => {
    //     this.homes = homes;
    //   });
    this.getTravel();
  }

  getTravel() {
    this.travel.getTravel().subscribe(
      data => {
        this.travels = data;
        this.travels = Array.of(this.travels);
      },
      err => console.error(err),
      () => console.log(this.travels)
    );
  }

  // addHome() {

  // }
}
