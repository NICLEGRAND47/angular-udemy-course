import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipelist.component.html',
    styleUrls: ['./recipelist.component.css']
})
export class RecipeListComponent {
  @Output() recipeDetail = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test 1',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    constructor() { }

    onRecipeDetailChange(recipe: Recipe) {
      this.recipeDetail.emit(recipe);
    }
}
