import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class User {
  constructor(
    public userName: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string,
  ) { }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userName:any
  email:any
  firstName:any
  lastName:any
  password:any
  user:User

  constructor(
    private router:Router,
    private hardcodedauthenticationservice: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    this.user = new User(this.userName, this.email, this.firstName, this.lastName, this.password);
  }
  addRestaurantSuccess(){
    this.user = new User(this.userName, this.email, this.firstName, this.lastName, this.password);

    console.log(this.user);
    this.hardcodedauthenticationservice.postUser(this.user).subscribe(data =>{
      console.log(data)
      this.router.navigate(['login']);
      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }
  addRestaurantCancel(){
    this.router.navigate(['login']);

  }
}
