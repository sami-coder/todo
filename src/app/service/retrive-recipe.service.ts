import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetriveRecipeService {

  constructor(private httpClient:HttpClient) { }

  getRecipe(entreeID){
    return this.httpClient.get(`http://localhost:8080/findRecipe?entree_domain_id=`+entreeID);
  }

  postRecipe(recipe){
    console.log(recipe);
    return this.httpClient.post(`http://localhost:8080/postRecipe`,recipe);
  }

  deleteRecipe(recipeID){
    return this.httpClient.delete(`http://localhost:8080/deleteRecipe?recipe_id=`+recipeID);
  }

}
