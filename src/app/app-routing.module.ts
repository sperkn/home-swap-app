import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { EditTravelComponent } from './edit-travel/edit-travel.component';
import { ResultsComponent } from './results/results.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  // { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-home', component: AddHomeComponent },
  { path: 'edit-home', component: EditHomeComponent },
  { path: 'add-travel', component: AddTravelComponent },
  { path: 'edit-travel', component: EditTravelComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'matches', component: MatchesComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
