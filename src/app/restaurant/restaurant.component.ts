import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RetriveRestaurantService } from '../service/retrive-restaurant.service';

// export class Restaurant {
//   constructor(
//     public id : number,
//     public name : string,
//     public address : string
//   ){}
// }

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants: any
  id: any
  authouser:any
  // restaurants = [
  //   new Restaurant(1,'Restaurant 1', 'Address 1'),
  //   new Restaurant(2,'Restaurant 2', 'Address 2'),
  //   new Restaurant(3,'Restaurant 3', 'Address 3'),
  //   new Restaurant(4,'Restaurant 4', 'Address 4')
  // ]

  constructor(
    private router: Router,
    private retriveRestaurants:RetriveRestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id=this.route.snapshot.params['id']
    //this.retriveRestaurants.getRestaurant(id).subscribe(data=>{
      //this.restaurants = data;
    //});
    this.getRestaurantAgain();
  }
  // ngOnInit() {
  //   console.log(this.name)
  //   console.log(this.password)
  //   this.apiService.getNews().subscribe((data)=>{
  //     console.log(data);
  //     this.articles = data;
  //   });
  // }

  getRestaurantAgain(){
    this.id=sessionStorage.getItem('authenticateID');
    this.retriveRestaurants.getRestaurant(this.id).subscribe(data=>{
      this.restaurants = data;
    });

  }
  showentree(id){
    sessionStorage.setItem('showEntree',id);
    this.router.navigate(['entree'])
    sessionStorage.setItem('restaurantID',id);
  }

  showinventory(id){
    sessionStorage.setItem('showInventory',id);

    this.router.navigate(['inventory'])
  }

  addRestaurant(){
    this.router.navigate(['add-restaurant'])

    // this.authouser=sessionStorage.getItem('');
    // sessionStorage.setItem('addRestaurant',);

  }
  removeRestaurant(restaurant_id){
    if(confirm('Are you sure you want to delete this?')){
      this.retriveRestaurants.deleteRestaurant(restaurant_id).subscribe(data=>{
        console.log(data);
        this.getRestaurantAgain();
      });
  
    }
  }

  placeOrder(restaurantID){
    sessionStorage.setItem('restaurantID',restaurantID);
    this.router.navigate(['place-order'])
    
  }
}
