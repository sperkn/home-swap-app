import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TravelRoutesService } from "../services/travel-routes.service";
import { ConnectionRoutesService } from "../services/connection-routes.service";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.css"]
})
export class MatchesComponent implements OnInit {
  otherTravelId: any;
  connectionId: any;
  travelReq: any;
  travelHome: any;
  contactInfo: any;
  connectionReq: any;
  connectionLength: number;
  userId: string;

  constructor(
    private route: ActivatedRoute,
    private travel: TravelRoutesService,
    private connection: ConnectionRoutesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.otherTravelId = params["travel"];
      this.connectionId = params["connection"];
    });

    this.travel.travelDetail(this.otherTravelId).subscribe(travelDetail => {
      this.travelReq = travelDetail;
      this.travelHome = travelDetail.userHome;
      this.privateInfo(this.travelReq.user);
      // console.log(this.travelHome);
      // console.log(this.travelReq);
    });

    this.connection
      .getConnectionDetails(this.connectionId)
      .subscribe(connnectionRequest => {
        this.connectionReq = connnectionRequest;
        this.connectionLength = Object.keys(this.connectionReq).length;

        if (this.connectionReq.user1 == this.travelReq.user) {
          this.userId = this.connectionReq.user2;
        } else {
          this.userId = this.connectionReq.user1;
        }
        console.log(this.userId);

        if (this.connectionLength == 11) {
          this.privateInfo(this.travelReq.user);
        }
      });
  }

  acceptConnection(x = { connectionId: this.connectionId }) {
    this.connection.acceptConnection(x).subscribe(() => {
      if (this.connectionLength == 11) {
        this.privateInfo(this.travelReq.user);
      }
      this.router.navigate(["/dashboard"]);
    });
  }

  declineConnection(x = { connectionId: this.connectionId }) {
    this.connection.declineConnection(x).subscribe();
    this.router.navigate(["/dashboard"]);
  }

  privateInfo(userId) {
    this.connection.privateInfo(userId).subscribe(userInfo => {
      this.contactInfo = userInfo[0];
      // console.log(this.contactInfo);
    });
  }
}
