import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  constructor(private router:Router,private productService:ProductService){

  }
  categoryList = this.productService.categoryList;

  onSelect(category:any) {
    this.router.navigate(['categories/' + category.link, { categoryName: category.categoryName }]);
  }

}
