import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { FormsModule } from '@angular/forms';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
const appRoutes:Routes=[
  
  {
    path:"",component:SigninComponent,
  },
  {
    path:"signup",component:SignupComponent,
  },
  {
    path:"dashboard",component:DashboardComponent,
  },
  {
    path:"addstudent",component:AddstudentComponent,
  },
  {
    path:"viewstudent",component:ViewstudentComponent,
  },
  {
    path:"addfaculty",component:AddfacultyComponent,
  }
 
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    AddstudentComponent,
    ViewstudentComponent,
    NavbarComponent,
    AddfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
