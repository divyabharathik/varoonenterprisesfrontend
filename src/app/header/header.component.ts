import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  search = '';
  showSearch = false;
  menuItems = [{ link: 'home', name: 'Home' }, { link: 'categories', name: 'Categories' }, { link: 'about', name: 'About' }, { link: 'contact', name: 'Contact' }]
  constructor() { }

  ngOnInit(): void {
  }

}
