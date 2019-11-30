import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetriveEntreeService {

  constructor(private httpClient:HttpClient) { }

  getEntree(restaurantID){
    return this.httpClient.get(`http://localhost:8080/findEntree?restaurant_id=`+restaurantID);

  }
  deleteEntree(entreeID){
    return this.httpClient.delete(`http://localhost:8080/deleteEntree?entree_id=`+entreeID);
  }

  postEntree(entree){
    console.log(entree);
    return this.httpClient.post("http://localhost:8080/postEntree",entree);
  }

  getSingleEntree(entreeID){
    return this.httpClient.get(`http://localhost:8080/findSingleEntree?entree_id=`+entreeID);
  }

  putSingleEntree(entree){
    console.log(entree);
    return this.httpClient.put(`http://localhost:8080/putEntree`,entree);
  }

  placeOrder(entreeID){
    console.log(entreeID);
    return this.httpClient.get(`http://localhost:8080/placeOrder?entreeId=`+entreeID);
  }
}
