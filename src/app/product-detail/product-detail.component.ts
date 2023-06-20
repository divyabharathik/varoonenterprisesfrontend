import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { EnquiryDialogComponent } from '../enquiry-dialog/enquiry-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: any;
  product: any;
  color: any;
  constructor(private service: ProductService, private route: ActivatedRoute, private dialog: MatDialog) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
    });
    this.product = this.service.getProductDetail(this.productId);
    this.color = "background-color:"+this.product.color;
  }

  openBottomSheet() {
    if(window.innerWidth < 500){
      this.dialog.open(EnquiryDialogComponent,{
        height: "100%"
      });
    }else{
      this.dialog.open(EnquiryDialogComponent);
    }
  }



}
