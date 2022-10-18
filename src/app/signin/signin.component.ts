import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }
  username=""
password=""
readValues=()=>{
  let data={

    "username":this.username,
    "password":this.password

  }
  if(this.username=="admin"&& this.password=="12345"){
    this.myrouter.navigate(["/dashboard"])
  }
  else{
    alert("invald login")
    this.myrouter.navigate(["/"])
  }
console.log(data)

}


  ngOnInit(): void {
  }

}
