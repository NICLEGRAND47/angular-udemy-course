import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  @Output() recipeDetail = new EventEmitter<Recipe>();

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeDetailChange() {
    this.recipeDetail.emit(this.recipe);
  }
}
