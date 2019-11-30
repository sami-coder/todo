import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username = 'dummy2'
  password = 'dummy2'
  errormsg = 'Please Enter Correct Username/Password'
  invalid = false
  somedata: any = true

  constructor(private router: Router,
    private hardscodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // if(this.username==="sumit" && this.password==='dummy'){
    // if(false){
    // this.hardscodedAuthentication.authenticate(this.username, this.password).subscribe((data)=>{
    //   this.somedata=!data;
    // });

    //   if(this.somedata){
    this.hardscodedAuthentication.authenticate(this.username, this.password).subscribe(
      Response => this.truelogin(Response)
    );
    //  if (this.hardscodedAuthentication.authenticate(this.username, this.password)) {
    //   //console.log(this.hardscodedAuthentication.authenticate(this.username, this.password));
    //   this.router.navigate(['homepage', this.username])
    //   this.invalid = false;
    // } else {
    //   console.log(this.hardscodedAuthentication.authenticate(this.username, this.password));
    //   this.invalid = true;
    // }

  }

  truelogin(response) {
    if (response>0) {
      this.hardscodedAuthentication.sessionSetup(this.username, response)
      // sessionStorage.setItem('UserName',this.username);
      // sessionStorage.setItem('UserID',this.id);
  
      // this.router.navigate([response, 'homepage', this.username])
      this.router.navigate(['homepage'])

      this.invalid = false;
    } else {
      console.log(this.hardscodedAuthentication.authenticate(this.username, this.password));
      this.invalid = true;
    }

  }
}
