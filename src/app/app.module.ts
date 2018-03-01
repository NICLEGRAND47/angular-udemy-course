import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './features/recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './features/recipebook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './features/recipebook/recipedetail/recipedetail.component';
import { RecipeComponent } from './features/recipebook/recipe/recipe.component';
import { ShoppinglistComponent } from './features/shoppinglist/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './features/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { IngredientComponent } from './features/shoppinglist/ingredient/ingredient.component';
import { HeaderComponent } from './page/header/header.component';
import { RootComponent } from './page/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    RecipeComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    IngredientComponent,
    HeaderComponent,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
