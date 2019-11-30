import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveEntreeService } from '../service/retrive-entree.service';
export class Entree123 {
  constructor(
    // public restaurant_id: number,
    public id : any,
    public name: any,
    public price: number,
    public restaurantDomain?: Restaurant_id
  ) {
  }
}

export class Restaurant_id {
  constructor(
    public id: number
  ) {
  }
}
@Component({
  selector: 'app-update-entree',
  templateUrl: './update-entree.component.html',
  styleUrls: ['./update-entree.component.css']
})
export class UpdateEntreeComponent implements OnInit {

  id: any
  restaurant_id: any
  entreeID:any
  entree: any
  entree123: Entree123
  name: any
  price: number
  restaurantDomain: Restaurant_id

  constructor(
    private route: ActivatedRoute,
    private retriveEntreeService: RetriveEntreeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('updateEntree');
    this.restaurant_id = sessionStorage.getItem('restaurantID');

    this.retriveEntreeService.getSingleEntree(this.id).subscribe(data => {
      this.entree = data;
      this.entreeID= this.entree.id;
      this.name = this.entree.name;
      this.price = this.entree.price;
    });

  }

  updateEntreeSuccess() {
    this.restaurantDomain = new Restaurant_id(this.restaurant_id);

    this.entree123 = new Entree123(this.entreeID, this.name, this.price, this.restaurantDomain);

    this.retriveEntreeService.putSingleEntree(this.entree123).subscribe(data => {
      console.log(data)
      this.router.navigate(['entree']);

      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }

  updateEntreeCancel() {
    this.router.navigate(['entree']);
  }
}
