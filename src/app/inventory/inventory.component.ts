import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveInventoryService } from '../service/retrive-inventory.service';

export class Inventory {
  constructor(
    public restaurant_id:number,
    public quantity: number,
    public quantityType: any,
    public threshold: number,
    public itemName: string,
  ) { }
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  id: any

  inventories :any
  restoname:any

  constructor(
    private route: ActivatedRoute,
    private retriveInventoryService: RetriveInventoryService,
    private router:Router
    ) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('showInventory');
    this.restoname = sessionStorage.getItem('RestoName');
    // this.id = this.route.snapshot.params['id'];
    this.retriveInventoryService.getInventory(this.id).subscribe(data=>{
      this.inventories = data;
    });

  }
getInventoryagain(){
  this.id = sessionStorage.getItem('showInventory');

  // this.id = this.route.snapshot.params['id'];
  this.retriveInventoryService.getInventory(this.id).subscribe(data=>{
    this.inventories = data;
  });

}
  removeInv(inventory_id){
    if(confirm('Are you sure you want to delete this?')){
    this.retriveInventoryService.deleteInventory(inventory_id).subscribe(data=>{
      console.log(data);
      this.getInventoryagain();
    });
  }
  }

  editInv(id){
    sessionStorage.setItem('updateInventory',id);
    this.router.navigate(['update-inventory']);
  }

  addInventory(){
    this.router.navigate(['add-inventory']);

  }
}


    // if (this.id == 1) {
    //   this.inventories = [
    //     new Inventory(1, 5, 5, 'Inventory 1'),
    //     new Inventory(1, 5, 5, 'Inventory 2'),
    //     new Inventory(1, 5, 5, 'Inventory 3'),
    //     new Inventory(1, 5, 5, 'Inventory 4')
    //   ]
    // } else if (this.id == 2) {
    //   this.inventories = [
    //     new Inventory(1, 5, 5, 'Inventory 11'),
    //     new Inventory(1, 5, 5, 'Inventory 22'),
    //     new Inventory(1, 5, 5, 'Inventory 33'),
    //     new Inventory(1, 5, 5, 'Inventory 44')
    //   ]
    // } else if (this.id == 3) {
    //   this.inventories = [
    //     new Inventory(1, 5, 5, 'Inventory 111'),
    //     new Inventory(1, 5, 5, 'Inventory 222'),
    //     new Inventory(1, 5, 5, 'Inventory 333'),
    //     new Inventory(1, 5, 5, 'Inventory 444'),
    //   ]
    // } else if (this.id == 4) {
    //   this.inventories = [
    //     new Inventory(1, 5, 5, 'Inventory 1111'),
    //     new Inventory(1, 5, 5, 'Inventory 2222'),
    //     new Inventory(1, 5, 5, 'Inventory 3333'),
    //     new Inventory(1, 5, 5, 'Inventory 4444')
    //   ]
    // } else {
    //   this.inventories = [
    //     new Inventory(0, 5, 5, 'Error! No Entree found')
    //   ]
    // }
