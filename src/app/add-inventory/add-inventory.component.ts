import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory/inventory.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveInventoryService } from '../service/retrive-inventory.service';

export class Inventory123 {
  constructor(
    public quantity: number,
    public threshold: number,
    public itemName: string,
    public restaurantDomain?: Restaurant_id
  ) { }
}

export class Restaurant_id{
  constructor(
    public id : number
  ){
  }
}
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  id: any
  itemName : any
  threshold: any
  quantity: any
  addInventory : Inventory
  inventory123: Inventory123
  restaurantDomain: Restaurant_id

  
  constructor(
    private route:ActivatedRoute,
    private retriveInventory: RetriveInventoryService,
    private router:Router
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    this.id = sessionStorage.getItem('restaurantID');
    console.log(this.id)
    this.restaurantDomain = new Restaurant_id(this.id);

    this.inventory123 = new Inventory123(this.quantity, this.threshold,this.itemName, this.restaurantDomain);

    console.log(this.id)

  }

  addInventSuccess(){
    // console.log(this.restaurant_id)
    // console.log(this.restaurant_id)
    this.id = sessionStorage.getItem('restaurantID');

    this.restaurantDomain = new Restaurant_id(this.id);

    this.inventory123 = new Inventory123(this.quantity, this.threshold,this.itemName, this.restaurantDomain);

    this.retriveInventory.postInventory(this.inventory123).subscribe(data =>{
      console.log(data)
      this.router.navigate(['inventory']);

      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }
  addInventCancel(){
    this.router.navigate(['inventory']);
  }
}
