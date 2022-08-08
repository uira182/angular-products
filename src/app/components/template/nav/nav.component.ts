import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Produtos', url: '/products', icon: 'list' },
  ];
  constructor() { }

  ngOnInit() {}

}
