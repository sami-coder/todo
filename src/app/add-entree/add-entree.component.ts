import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveEntreeService } from '../service/retrive-entree.service';

export class Entree123{
  constructor(
    // public restaurant_id: number,
    public name : any,
    public price: number,
    public restaurantDomain?: Restaurant_id
  ){
  }
}

export class Restaurant_id{
  constructor(
    public id : number
  ){
  }
}

@Component({
  selector: 'app-add-entree',
  templateUrl: './add-entree.component.html',
  styleUrls: ['./add-entree.component.css']
})
export class AddEntreeComponent implements OnInit {


  id : any
  entree123: Entree123
  name:any
  price:number
  restaurantDomain: Restaurant_id

  constructor(
    private route:ActivatedRoute,
    private retriveEntree: RetriveEntreeService,
    private router:Router
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.restaurant_id)
    this.id = sessionStorage.getItem('restaurantID');
    this.restaurantDomain = new Restaurant_id(this.id);
    
    this.entree123 = new Entree123(this.name, this.price, this.restaurantDomain);

    // console.log(this.restaurant_id)

  }
  addEntreeSuccess(){
    // console.log(this.restaurant_id)
    // console.log(this.restaurant_id)
    // this.entree123 = new Entree123(this.restaurant_id, this.name, this.price, this.restaurant);
    this.id = sessionStorage.getItem('restaurantID');

    this.restaurantDomain = new Restaurant_id(this.id);
    
    this.entree123 = new Entree123(this.name, this.price, this.restaurantDomain);

    console.log(this.entree123);
    this.retriveEntree.postEntree(this.entree123).subscribe(data =>{
      console.log(data)
      this.router.navigate(['entree']);

      //this.router.navigate(['inventory'],this.restaurant_id)
    })

  }
  addEntreeCancel(){
    this.router.navigate(['entree']);

  }

}
