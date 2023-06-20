import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList = [
    {
      categoryName: 'Millets',
      link: 'millets',
      imageLink: '../../assets/images/millets.png',
    },
    {
      categoryName: 'Vegetables',
      link: 'vegetables',
      imageLink: '../../assets/images/vegetables.png',
    },
    {
      categoryName: 'Fruits',
      link: 'fruits',
      imageLink: '../../assets/images/fruits.png',
    },
    {
      categoryName: 'Moringa products',
      link: 'moringaProducts',
      imageLink: '../../assets/images/moringa.png',
    },
  ];
  constructor(private service: ProductService) { }
  ngOnInit() {
  }
}
