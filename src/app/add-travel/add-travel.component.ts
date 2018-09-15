import { Component, OnInit } from "@angular/core";
import { TravelRoutesService } from "../services/travel-routes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-travel",
  templateUrl: "./add-travel.component.html",
  styleUrls: ["./add-travel.component.css"]
})
export class AddTravelComponent implements OnInit {
  formInfo: any = {
    beginDate: Date,
    endDate: Date,
    home: "",
    setting: "",
    landscape: ""
  };

  constructor(private travel: TravelRoutesService, private router: Router) {}

  ngOnInit() {}

  addTravel() {
    this.formInfo.beginDate += "T00:00:00";
    this.formInfo.endDate += "T00:00:00";
    console.log(this.formInfo);
    this.travel.addTravel(this.formInfo).subscribe();
    this.router.navigate(["/dashboard"]);
  }
}
