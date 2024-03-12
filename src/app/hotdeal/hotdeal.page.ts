import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotdeal',
  templateUrl: './hotdeal.page.html',
  styleUrls: ['./hotdeal.page.scss'],
})
export class HotdealPage implements OnInit {
  selectedSegment: string = 'hotDeals'; // Default segment
  products = [
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$29.99'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
