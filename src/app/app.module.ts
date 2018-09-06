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
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHomeComponent } from './add-home/add-home.component';
=======
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    DashboardComponent,
    AddHomeComponent
=======
    SignupComponent,
    LoginComponent
>>>>>>> dev
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
