import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    ErrormsgComponent,
    RestaurantComponent,
    MenubarComponent,
    FooterComponent,
    LogoutComponent,
    EntreeComponent,
    InventoryComponent,
    AddInventoryComponent,
    AddEntreeComponent,
    AddRestaurantComponent,
    CreateUserComponent,
    RecipeComponent,
    AddRecipeComponent,
    UpdateInventoryComponent,
    UpdateEntreeComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
