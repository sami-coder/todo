import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetriveEntreeService } from '../service/retrive-entree.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  id: any
  entrees: any

  constructor(
    private retriveEntreeService: RetriveEntreeService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('restaurantID');
    this.retriveEntreeService.getEntree(this.id).subscribe(data => {
      this.entrees = data;
    });

  }

  confirmOrder(entreeID){
    if(confirm('Are you sure you want to order this?')){

    this.retriveEntreeService.placeOrder(entreeID).subscribe(data => {
      // this.entrees = data;
      console.log(data);
    });
  }

  }

}
