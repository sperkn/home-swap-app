import { Component, OnInit } from "@angular/core";
import { TravelRoutesService } from "../services/travel-routes.service";

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

  constructor(private travel: TravelRoutesService) {}

  ngOnInit() {}

  addTravel() {
    this.travel.addTravel(this.formInfo).subscribe();
  }
  
}
