//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

//Services & Routing Imports
import { AuthRoutesService } from './services/auth-routes.service'
import { AppRoutingModule } from './/app-routing.module';

//Components Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { EditTravelComponent } from './edit-travel/edit-travel.component';
import { ResultsComponent } from './results/results.component';
import { MatchesComponent } from './matches/matches.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddHomeComponent,
    EditHomeComponent,
    AddTravelComponent,
    EditTravelComponent,
    ResultsComponent,
    MatchesComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthRoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
