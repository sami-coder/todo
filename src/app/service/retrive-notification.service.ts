import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetriveNotificationService {

  constructor(private httpClient:HttpClient) { }

  getNotification(user_id){
    return this.httpClient.get(`http://localhost:8080/getNotification?id=`+user_id);

  }
}
