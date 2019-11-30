import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveRestaurantService } from '../service/retrive-restaurant.service';

export class Restaurant123 {
  constructor(
    public name: string,
    public address: string,
    public userDomain?: User_id
  ) { }
}

export class User_id{
  constructor(
    public id : number
  ){
  }
}
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  id : any
  name : any
  address : any
  userDomain: User_id
  restaurant123: Restaurant123

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private retriveRestaurant: RetriveRestaurantService
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    this.id = sessionStorage.getItem('authenticateID');
    console.log(this.id)
    this.userDomain = new User_id(this.id);

    this.restaurant123 = new Restaurant123(this.name, this.address, this.userDomain);
  }

  addRestaurantSuccess(){
    // this.id = this.route.snapshot.params['id'];
    this.id = sessionStorage.getItem('authenticateID');

    console.log(this.id)
    this.userDomain = new User_id(this.id);

    this.restaurant123 = new Restaurant123(this.name, this.address, this.userDomain);

    console.log(this.restaurant123);
    this.retriveRestaurant.postRestaurant(this.restaurant123).subscribe(data =>{
      console.log(data)
      this.router.navigate(['restaurant']);
      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }
  addRestaurantCancel(){
    this.router.navigate(['restaurant']);
  }
}
