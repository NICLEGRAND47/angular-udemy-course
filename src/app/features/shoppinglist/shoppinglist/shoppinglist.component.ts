import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import {ShoppinglisteditComponent} from '../shoppinglistedit/shoppinglistedit.component';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
