import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory/inventory.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveInventoryService } from '../service/retrive-inventory.service';

export class Inventory123 {
  constructor(
    public quantity: number,
    public quantityType: any,
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
  quantityType : any
  addInventory : Inventory
  inventory123: Inventory123
  restaurantDomain: Restaurant_id

  //   <select ng-model="osType">
//     <option value=" ">Choose OS</option>
//     <option ng-repeat="o in operatingsystems">{{o}}</option>
// </select>
// $scope.operatingsystems = ["Ubuntu-16", "Centos 7", "Wimdows"];

  // inventorytype = ["Litter", "Kg"];
  
  constructor(
    private route:ActivatedRoute,
    private retriveInventory: RetriveInventoryService,
    private router:Router
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    this.id = sessionStorage.getItem('showInventory');
    console.log(this.id)
    this.restaurantDomain = new Restaurant_id(this.id);

    this.inventory123 = new Inventory123(this.quantity, this.quantityType, this.threshold,this.itemName, this.restaurantDomain);

    console.log(this.id)

  }

  addInventSuccess(){
    // console.log(this.restaurant_id)
    // console.log(this.restaurant_id)
    this.id = sessionStorage.getItem('showInventory');

    this.restaurantDomain = new Restaurant_id(this.id);

    this.inventory123 = new Inventory123(this.quantity, this.quantityType, this.threshold,this.itemName, this.restaurantDomain);

    console.log(this.inventory123);
    this.retriveInventory.postInventory(this.inventory123).subscribe(data =>{
      console.log(data)
      this.router.navigate(['inventory']);

      //this.router.navigate(['inventory'],this.restaurant_id)
    })
  }
  addInventCancel(){
    this.router.navigate(['inventory']);
  }

  testing(){
    console.log(this.quantityType);
  }
}
