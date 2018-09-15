import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from "@angular/router";
import { AuthRoutesService } from "../services/auth-routes.service";
import { environment } from '../../environments/environment'

const URL = `${environment.BASE_URL}/api/myhome`;

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL, itemAlias: 'file'
  });
 
  address = {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  };

  newHome = {
    home: '',
    setting: '',
    landscape: '',
    bedrooms: '',
    beds: '',
    baths: '',
    description: ''
  };

  feedback: string;
  // user: any = false;
  // error: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('home', this.newHome.home);
      form.append('setting', this.newHome.setting);
      form.append('landscape', this.newHome.landscape);
      form.append('bedrooms', this.newHome.bedrooms);
      form.append('beds', this.newHome.beds);
      form.append('baths', this.newHome.baths);
      form.append('address', JSON.stringify(this.address));
      form.append('description', this.newHome.description);
      // form.append('homePhotos', JSON.stringify(this.newHome.homePhotos));
    };

    this.uploader.uploadAll();
    // .subscribe(user => this.successCb(user), err => this.errorCb(err));
  }
  
  // errorCb(err) {
  //   this.error = err;
  //   this.user = null;
  // }

  // successCb(user) {
  //   this.user = user;
  //   this.router.navigate(["/dashboard"]);
  //   this.error = null;
  // }

}
