import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinquiry',
  templateUrl: './myinquiry.page.html',
  styleUrls: ['./myinquiry.page.scss'],
})
export class MyinquiryPage implements OnInit {
  inquiries: any[] = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1234567890',
      address: '123 Main Street, City, Country',
      projectDescription: 'Looking for interior design services for my living room.',
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '+1987654321',
      address: '456 Elm Street, Town, Country',
      projectDescription: 'Inquiring about kitchen renovation options.',
    },
    // Add more inquiries as needed
  ];
  constructor() { }

  ngOnInit() {
  }

}
