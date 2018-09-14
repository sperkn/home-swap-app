import { Component, OnInit } from "@angular/core";
import { TravelRoutesService } from "../services/travel-routes.service";
import { HttpClient } from "@angular/common/http";
import { HomeRoutesService } from "../services/home-routes.service";
import { ConnectionRoutesService } from "../services/connection-routes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [HomeRoutesService]
})
export class DashboardComponent implements OnInit {
  homes: any = [];
  travels: any = [];
  connections: any = [];

  constructor(
    private travel: TravelRoutesService,
    private home: HomeRoutesService,
    private connection: ConnectionRoutesService
  ) {}

  ngOnInit() {
    this.home.getMyHome().subscribe(homes => {
      this.homes = homes;
    });

    this.travel.getTravel().subscribe(travels => {
      console.log(travels);
      this.travels = travels;
    });

    this.connection.getConnection().subscribe(connections => {
      console.log(connections);
      this.connections = connections;
    });
  }

  deleteTravel(travelId) {
    this.travel.deleteTravel(travelId).subscribe(() => {
      this.travel.getTravel().subscribe(travels => {
        this.travels = travels;
      });
    });
  }

  // addHome() {

  // }
}
