import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 'Recipes';

  currentPageChange(data: string) {
    this.currentPage = data;
  }

  isRecipesPage() {
    return this.currentPage === 'Recipes';
  }

  isShoppingListPage() {
    return this.currentPage === 'Shopping List';
  }
}
