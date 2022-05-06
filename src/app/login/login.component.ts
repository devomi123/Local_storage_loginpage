import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  formdata:any;
  email:string="";
  password:string="";
  data:any;


  ngOnInit(): void {
    this.formdata = new FormGroup({
      email:new FormControl("", Validators.compose([Validators.required, Validators.email ])),
      password: new FormControl("",Validators.compose([Validators.required]))
    })
  }
  submitdata(data:any){
  console.log(data )
  // alert("hello")

  }

  register(){

  }

}
