import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { environment } from 'src/environments/environment';
interface EnquiryRequest {
  name: string,
  mobile: string,
  email: string,
  timestamp: Date,
  category: string,
  productInterest: string,
  address: string,
  query: string
}
@Component({
  selector: 'app-enquiry-dialog',
  templateUrl: './enquiry-dialog.component.html',
  styleUrls: ['./enquiry-dialog.component.scss']
})
export class EnquiryDialogComponent implements OnInit {
  contactForm: any = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder, private service: ProductService, public dialog: MatDialog) { }
  loading = false;
  categoryList = this.service.getCategoryList();
  productList = this.service.productList;
  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required]],
      category: [''],
      productInterest: [''],
      address: ['', [Validators.required]],
      query: ['', Validators.required],
    });
  }

  // openDialog() {
  //   this.dialog.open(ThanksDialog);
  // }

  getContactDetails() {
    this.loading = true;
    console.log(this.contactForm);
    if (this.contactForm.invalid) {
      for (const control of Object.keys(this.contactForm.controls)) {
        this.contactForm.controls[control].markAsTouched();
      }
      this.loading = false;
      return;
    }
    let payload: EnquiryRequest = {
      name: this.contactForm.value.name,
      mobile: this.contactForm.value.mobile,
      email: this.contactForm.value.email,
      timestamp: new Date(),
      category: this.contactForm.value.category.toString(),
      productInterest: this.contactForm.value.productInterest.toString(),
      address: this.contactForm.value.address,
      query: this.contactForm.value.query
    }
    console.log(payload);

    let url = environment.url+"productenquiry";
    this.service.postToServer(url, payload).subscribe((data) => {
      if (data.message == "success") {
        this.loading = false;
        console.log(data.message);
        this.contactForm.reset();
        this.dialog.closeAll();
      }
    })

  }
  close() {
    this.dialog.closeAll();
  }
}
