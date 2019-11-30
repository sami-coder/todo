import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private httpClient: HttpClient) { }


  // authenticate(username, password) {
  //      if (username === "sumit" && password === 'dummy') {

  //      sessionStorage.setItem('authenticaUser', username);

  //       return true;
  //    }

  //      return false;
  //  }
  

   authenticate(username, password) {
    return this.httpClient.get(`http://localhost:8080/login?userName=`+username+`&passWord=`+password);
   }

   sessionSetup(username, response){
        sessionStorage.setItem('authenticaUser', username);
        sessionStorage.setItem('authenticateID', response);
   }
  isUserLogedin() {
    let user = sessionStorage.getItem('authenticaUser')
    return !(user === null)
  }

  userLogedout() {
    sessionStorage.removeItem('authenticaUser');
    sessionStorage.removeItem('authenticateID');
    sessionStorage.removeItem('restaurantID');
    sessionStorage.removeItem('updateEntree');
    sessionStorage.removeItem('updateInventory');
    sessionStorage.removeItem('showInventory');
    sessionStorage.removeItem('showEntree');
    sessionStorage.removeItem('entreeRecipeID');


  }

  postUser(user){
      console.log(user);
      return this.httpClient.post("http://localhost:8080/postUser",user);
  }
}
