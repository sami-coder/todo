import { Component, OnInit } from '@angular/core';
import { RetriveInventoryService } from '../service/retrive-inventory.service';
import { Router } from '@angular/router';
export class Inventory123 {
  constructor(
    public id : any,
    public quantity: number,
    public quantityType: any,
    public threshold: number,
    public itemName: string,
    public restaurantDomain?: Restaurant_id
  ) { }
}

export class Restaurant_id {
  constructor(
    public id: number
  ) {
  }
}
@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {

  restaurant_id: any
  id: any
  inventoryID: any
  inventory: any
  itemName: any
  quantityType: any
  quantity: any
  threshold: any
  inventory123: Inventory123
  restaurantDomain: Restaurant_id


  constructor(
    private retriveInventoryService: RetriveInventoryService,
    private router:Router


  ) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('updateInventory');
    this.restaurant_id = sessionStorage.getItem('showInventory');

      this.retriveInventoryService.getSingleInventory(this.id).subscribe(data => {
        this.inventory = data;
        this.inventoryID = this.inventory.id;
        this.itemName = this.inventory.itemName;
        this.quantity = this.inventory.quantity;
        this.quantityType = this.inventory.quantityType;
        this.threshold = this.inventory.threshold;
      });

  }

  updateInventSuccess(){

    this.restaurantDomain = new Restaurant_id(this.restaurant_id);

    this.inventory123 = new Inventory123(this.inventoryID, this.quantity, this.quantityType, this.threshold,this.itemName, this.restaurantDomain);

    this.retriveInventoryService.putSingleInventory(this.inventory123).subscribe(data =>{
      console.log(data)
      this.router.navigate(['inventory']);

      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }

  updateInventCancel(){
    this.router.navigate(['inventory']);
  }

}
