import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  name=""
  phoneNumber=""
  gender=""
  email=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  pname=""
  psswd=""
  cpsswd=""

  readValues=()=>{
    let data={
      "name":this.name,
      "phoneNumber":this.phoneNumber,
      "gender":this.gender,
      "email":this.email,
      "address":this.address,
      "pincode":this.pincode,
      "bloodgroup":this.bloodgroup,
      "dob":this.dob,
      "age":this.age,
      "pname":this.pname,
      "psswd":this.psswd,
      "cpsswd":this.cpsswd
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
