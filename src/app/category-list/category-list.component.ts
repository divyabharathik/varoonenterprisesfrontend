import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  constructor(private router:Router){

  }
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
    { categoryName: 'Fruits',
      link: 'fruits',
      imageLink: '../../assets/images/fruits.png',
    },
    { categoryName: 'Indian Spices',
      link: 'spices',
      imageLink: '../../assets/images/spices.png',
    },
    { categoryName: 'Rice',
      link: 'rice',
      imageLink: '../../assets/images/rice.png',
    },
    { categoryName: 'Moringa products',
      link: 'moringaProducts',
      imageLink: '../../assets/images/moringa.png',
    },
  ];

  onSelect(category:any) {
    this.router.navigate(['categories/' + category.link, { categoryName: category.categoryName }]);
  }

}
