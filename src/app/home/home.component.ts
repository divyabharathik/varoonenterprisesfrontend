import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: ProductService, private router: Router) { }
  categoryList = this.service.getTopCategoryList();
  ngOnInit() {
  }

  onSelect(category: any) {
    this.router.navigate(['categories/' + category.link, { categoryName: category.categoryName }]);
  }
}
