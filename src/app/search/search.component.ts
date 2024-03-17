import { Component } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  searchResults: Product[] = [];

  performSearch(): void {
    
    this.searchResults = ProductsService.products.filter(item => {
      const txt = this.searchText.toLowerCase()
      return item.name.toLowerCase().includes(txt) || item.type.toLowerCase().includes(txt) || item.manufacturer.toLowerCase().includes(txt)
    });
  }
}
