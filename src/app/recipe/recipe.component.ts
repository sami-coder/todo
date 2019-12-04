import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveRecipeService } from '../service/retrive-recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  id:any
  recipes:any
  reciipeId:any
  recipeName:any

  constructor(
    private route: ActivatedRoute,
    private retriveRecipeService:RetriveRecipeService,
    private router:Router


  ) { }

  ngOnInit() {
    this.id=sessionStorage.getItem('entreeRecipeID');
    this.recipeName=sessionStorage.getItem('DishName');
    // this.id=this.route.snapshot.params['id']
    this.getRecipeagain();
    sessionStorage.getItem('restaurantID');
  }

  removeRecipe(recipe_id){
    if(confirm('Are you sure you want to delete this?')){

    this.retriveRecipeService.deleteRecipe(recipe_id).subscribe(data=>{
      console.log(data);
      this.getRecipeagain();
    });
  }

  }

  getRecipeagain(){
    this.id=sessionStorage.getItem('entreeRecipeID');
    // this.id=this.route.snapshot.params['id']
    this.retriveRecipeService.getRecipe(this.id).subscribe(data=>{
      console.log(data);
      this.recipes = data;
    });

  }

  addRecipe(){
    this.id=sessionStorage.getItem('entreeRecipeID');
    this.router.navigate(['add-recipe']);
  }
  
  goBack(){
    this.router.navigate(['entree']);
  }
}
