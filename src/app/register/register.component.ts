import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl,  Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  formdata:any;
  data:any;
  firstname:string="";
  lastname:string="";
  mobileno:string="";
  email:string="";
  password:string="";
  cpassword:string="";
  ctrl:any;

  ngOnInit(): void {
    this.data = new FormGroup({
      firstname: new FormControl("", Validators.compose([Validators.required ])),
      lastname: new FormControl("", Validators.compose([Validators.required ])),
      mobileno: new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)])),
      email:new FormControl("", Validators.compose([Validators.required, Validators.email ])),
      password: new FormControl("",Validators.compose([Validators.required ,Validators.minLength(8)]) ),
      // cpassword: new FormControl("",Validators.compose([Validators.required ,Validators.maxLength(4)]) )
   })

  }
  submitdata(data:any){
//     let ctrl:any =  {data};
//     let arry : Array<any>  =[ctrl];
//  let local: any = localStorage.getItem("Register");
//  console.log(local);

//  if(local==null){
//   localStorage.setItem("Register",JSON.stringify(arry));
//  }
//  else{
//    local  =JSON.parse(local);
//    local.push(arry);
//    localStorage.setItem("Register",JSON.stringify(local));
//  }
//     console.log(data);


let obj = {
  fname:data.firstname,
  lname:data.lastname,
  email:data.email,
  mobileno:data.mobileno,
  password:data.password
}
console.log(obj);
localStorage.setItem("Register",JSON.stringify(obj));
let mytask = localStorage.getItem("Register");
let newtask = JSON.parse(localStorage.getItem("Register"));
// localStorage.getItem("Register");
 console.log(mytask);

  }

}
