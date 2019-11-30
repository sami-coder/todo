import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../inventory/inventory.component';


@Injectable({
  providedIn: 'root'
})
export class RetriveInventoryService {

  constructor(private httpClient:HttpClient) { 
    inventory : Inventory
  
  }
  
  getInventory(restaurantID){
    return this.httpClient.get(`http://localhost:8080/findInventory?restaurant_id=`+restaurantID);
  }

  deleteInventory(inventoryID){
    return this.httpClient.delete(`http://localhost:8080/deleteInventory?inventory_id=`+inventoryID);
  }
  
  postInventory(inventory){
    console.log(inventory);
    return this.httpClient.post(`http://localhost:8080/postInventory`,inventory);
  }

  getSingleInventory(inventoryID){
    return this.httpClient.get(`http://localhost:8080/findSingleInventory?inventory_id=`+inventoryID);
  }

  putSingleInventory(inventory){
    console.log(inventory);
    return this.httpClient.put(`http://localhost:8080/putInventory`,inventory);
  }
  
}
