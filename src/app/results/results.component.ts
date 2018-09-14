import { Component, OnInit } from "@angular/core";
import { TravelRoutesService } from "../services/travel-routes.service";
import { ConnectionRoutesService } from "../services/connection-routes.service"
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  results: any;
  otherTravelId: any;

  travelId: any = {};
  userTravelReq: any;
  match: boolean;

  dummyData: string = 'nothing'

  constructor(
    private route: ActivatedRoute,
    private travel: TravelRoutesService,
    private connection: ConnectionRoutesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.travelId.id = params["id"];
    });

    this.getDetails();

    this.travel.getResults(this.travelId.id).subscribe(results => {
      console.log(results);
      this.results = results;
    });
  }

  getDetails(){
  this.travel.travelDetail(this.travelId.id).subscribe(userTravelReq => {
    this.userTravelReq = userTravelReq
  });
}

  like(otherTravelId) {
    this.travel.like(this.travelId, otherTravelId).subscribe(() => {
      this.checkMatch(otherTravelId)
      this.travel.getResults(this.travelId.id).subscribe(results => {
        this.results = results;
        this.getDetails();
      });
    });
  }

  dislike(otherTravelId) {
    this.travel.dislike(this.travelId, otherTravelId).subscribe(() => {
      this.travel.getResults(this.travelId.id).subscribe(results => {
        this.results = results;
      });
    });
  }

  checkMatch(likedId){
    this.travel.checkMatch(this.travelId.id, likedId).subscribe(match => {
      this.match = match;
      console.log(this.match);
      if (match == true){
        this.createConnection(this.travelId.id, likedId);
      }
    });
  }

  createConnection(userRequest, otherUserRequest){
    this.connection.addConnection(userRequest, otherUserRequest, this.dummyData).subscribe();
    console.log("connect run");
  }
}
