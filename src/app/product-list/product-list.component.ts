import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  category: any;
  categoryName: any;
  productList: any;
  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.categoryName = params['categoryName'];
    });
    this.productList = this.service.getProductList(this.category);
  }

  onSelect(product: any) {
    this.router.navigate(['product/' + product.link]);
  }
  back(){
    this.router.navigate(['categories']);
  }

}
