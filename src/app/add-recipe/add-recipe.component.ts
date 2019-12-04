import { Component, OnInit } from '@angular/core';
import { RetriveInventoryService } from '../service/retrive-inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveRecipeService } from '../service/retrive-recipe.service';

export class Recipe123 {
  constructor(
    public name: string,
    public quantity: number,
    public inventoryDomain?: Inventory_Domain,
    public entreeDomain?: Entree_Domain
  ) { }
}

export class Inventory_Domain{
  constructor(
    public id : number
  ){
  }
}
export class Entree_Domain{
  constructor(
    public id : number
  ){
  }
}
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  inventories:any
  id: any ={}
  entreeID: any
  recipe: Recipe123
  inventoryDomain: Inventory_Domain
  entreeDomain: Entree_Domain
  recipeName:any

  constructor(
    private route:ActivatedRoute,
    private retriveInventoryService : RetriveInventoryService,
    private retriveRecipeService: RetriveRecipeService,
    private router:Router


  ) { }

  ngOnInit() {
    // this.entreeID = this.route.snapshot.params['id'];
    this.entreeID=sessionStorage.getItem('entreeRecipeID');
    this.recipeName=sessionStorage.getItem('DishName');


    this.id = sessionStorage.getItem('restaurantID');
    this.retriveInventoryService.getInventory(this.id).subscribe(data=>{
      this.inventories = data;
    });

  }
  addRecipe(id,name,quantity){

    this.entreeDomain = new Entree_Domain(this.entreeID);
    this.inventoryDomain = new Inventory_Domain(id);
    
    this.recipe = new Recipe123(name, quantity,this.inventoryDomain, this.entreeDomain);


    this.retriveRecipeService.postRecipe(this.recipe).subscribe(data =>{
      console.log(data);
      this.router.navigate(['recipe']);

      // this.router.navigate(['inventory',this.id]);

    })
  }
  Done(){
    this.router.navigate(['recipe']);

  }

}
// {
//         "name":"name",
//         "quantity":"10.2",
//         "inventoryDomain":{
//         	"id":"1"
//         },
//         "entreeDomain":{
//         	"id":"1"
//         } 
// }