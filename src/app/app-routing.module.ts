import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { EntreeComponent } from './entree/entree.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { AddEntreeComponent } from './add-entree/add-entree.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { UpdateEntreeComponent } from './update-entree/update-entree.component';
import { PlaceOrderComponent } from './place-order/place-order.component';


const routes: Routes = [
  {path:'', component:LoginpageComponent},
  {path:'login', component:LoginpageComponent},
  {path :'create-user' , component: CreateUserComponent},
  {path :':id/homepage/:name' , component: HomepageComponent, canActivate:[RouteGuardService]},
  {path :'homepage' , component: HomepageComponent, canActivate:[RouteGuardService]},
  {path :':id/restaurant' , component: RestaurantComponent, canActivate:[RouteGuardService]},
  {path :'restaurant' , component: RestaurantComponent, canActivate:[RouteGuardService]},
  {path :'logout' , component: LogoutComponent, canActivate:[RouteGuardService]},
  {path :'entree/:id' , component: EntreeComponent, canActivate:[RouteGuardService]},
  {path :'entree' , component: EntreeComponent, canActivate:[RouteGuardService]},
  {path :'inventory/:id' , component: InventoryComponent, canActivate:[RouteGuardService]},
  {path :'inventory' , component: InventoryComponent, canActivate:[RouteGuardService]},
  {path :':id/add-inventory' , component: AddInventoryComponent, canActivate:[RouteGuardService]},
  {path :'add-inventory' , component: AddInventoryComponent, canActivate:[RouteGuardService]},
  {path :':id/add-entree' , component: AddEntreeComponent, canActivate:[RouteGuardService]},
  {path :'add-entree' , component: AddEntreeComponent, canActivate:[RouteGuardService]},
  {path :':id/add-restaurant' , component: AddRestaurantComponent, canActivate:[RouteGuardService]},
  {path :'add-restaurant' , component: AddRestaurantComponent, canActivate:[RouteGuardService]},
  {path :':id/recipe' , component: RecipeComponent, canActivate:[RouteGuardService]},
  {path :'recipe' , component: RecipeComponent, canActivate:[RouteGuardService]},
  {path :':id/add-recipe' , component: AddRecipeComponent, canActivate:[RouteGuardService]},
  {path :'add-recipe' , component: AddRecipeComponent, canActivate:[RouteGuardService]},
  {path :'update-inventory' , component: UpdateInventoryComponent, canActivate:[RouteGuardService]},
  {path :'update-entree' , component: UpdateEntreeComponent, canActivate:[RouteGuardService]},
  {path :'place-order' , component: PlaceOrderComponent, canActivate:[RouteGuardService]},



  {path :'**', component: ErrormsgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
