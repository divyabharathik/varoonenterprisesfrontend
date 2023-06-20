import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

interface ContactRequest {
  name: string,
  mobile: string,
  email: string,
  timestamp: Date,
  category: string,
  query: string
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder, private service: ProductService, public dialog: MatDialog) { }
  loading = false;
  categoryList = this.service.getCategoryList();
  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required]],
      category: [''],
      query: ['', Validators.required],
    });
  }

  openDialog() {
    this.dialog.open(ThanksDialog);
  }

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
    let payload: ContactRequest = {
      name: this.contactForm.value.name,
      mobile: this.contactForm.value.mobile,
      email: this.contactForm.value.email,
      timestamp: new Date(),
      category: this.contactForm.value.category.toString(),
      query: this.contactForm.value.query
    }
    this.contactForm.reset();

    let url = environment.url + "enquiry";
    this.service.postToServer(url, payload).subscribe((data) => {
      if (data.message == "success") {
        this.openDialog();
        this.loading = false;
        this.contactForm.controls
        console.log(data.message);
      }
    })

  }
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'thanksDialog.html',
})
export class ThanksDialog { }
