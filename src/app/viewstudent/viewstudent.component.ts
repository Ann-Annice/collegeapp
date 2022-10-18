import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  studentData=[
    {"name":"rahul","rno":1,"admno":15432,"college":"carmel college","department":"MCA","bloodgroup":"A+","dob":"12/10/1998","pname":"krishna","pemail":"krishna99@gmail.com","gname":"karan","gaddress":"xyz street"},
    {"name":"ryan","rno":2,"admno":15452,"college":"nirmala college","department":"Mechanical Engineering","bloodgroup":"B+","dob":"2/10/1998","pname":"jacob","pemail":"jacob99@gmail.com","gname":"laura","gaddress":"abc street"},
    {"name":"jack","rno":3,"admno":17832,"college":"vidya college","department":"Civil Engineering","bloodgroup":"O+","dob":"22/10/1998","pname":"david","pemail":"david99@gmail.com","gname":"mary","gaddress":"wxy street"},
    {"name":"isac","rno":4,"admno":19932,"college":"jyothi college","department":"Computer Science Engineering","bloodgroup":"AB+","dob":"12/8/1998","pname":"babu","pemail":"babu79@gmail.com","gname":"alex","gaddress":"mno street"},
    {"name":"eric","rno":5,"admno":15662,"college":"thejus college","department":"Electronics and Electrical Engineering","bloodgroup":"A+","dob":"2/7/1998","pname":"davis","pemail":"davis099@gmail.com","gname":"austin","gaddress":"jkl street"}
  ]

  ngOnInit(): void {
  }

}
