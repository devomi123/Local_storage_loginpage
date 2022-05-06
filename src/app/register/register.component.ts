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


  ngOnInit(): void {
    this.data = new FormGroup({
      firstname: new FormControl("", Validators.compose([Validators.required ])),
      lastname: new FormControl("", Validators.compose([Validators.required ])),
      mobileno: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10)])),
      email:new FormControl("", Validators.compose([Validators.required, Validators.email ])),
      password: new FormControl("",Validators.compose([Validators.required ,Validators.maxLength(4)]) ),
      cpassword: new FormControl("",Validators.compose([Validators.required ,Validators.maxLength(4)]) )

    })
    
  }
  submitdata(data:any){
    let ctrl = {data}
    localStorage.setItem("Register",JSON.stringify(ctrl))
    console.log(data)
  }

}
