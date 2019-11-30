import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetriveRestaurantService {

  constructor(private httpClient: HttpClient) { }

  getRestaurant(userID){
    return this.httpClient.get(`http://localhost:8080/findRestaurant?user_id=`+userID);
  }

  postRestaurant(Restaurant){
    console.log(Restaurant);
    return this.httpClient.post("http://localhost:8080/postRestaurant",Restaurant);
  }

  deleteRestaurant(restaurantID){
    return this.httpClient.delete(`http://localhost:8080/deleteRestaurant?restaurant_id=`+restaurantID);
  }
}
