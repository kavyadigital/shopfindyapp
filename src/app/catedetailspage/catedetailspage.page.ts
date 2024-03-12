import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-catedetailspage',
  templateUrl: './catedetailspage.page.html',
  styleUrls: ['./catedetailspage.page.scss'],
})
export class CatedetailspagePage implements OnInit {
  routerState: any;
  title: any;
  colorScheme: any;
  selectedIcons: any[] = [];
  s_name:any;
  s_id:any;
  s_desc:any;
  image:any;
  url = "https://testkavyadigitalsolution.com/shopfindy/api/admin/uploads/";
  roomSize: any;
  preferredMaterials: any;

  constructor(public router: Router) { }

  ngOnInit() {
    this.routerState = this.router.getCurrentNavigation()?.extras.state
    this.s_name = this.routerState['title']['s_name'];
    this.image = this.routerState['title']['image'];
    this.s_desc = this.routerState['title']['s_desc'];
    this.s_id = this.routerState['title']['s_id'];
  }
  detsils(design:any){
    const navigationExtras: NavigationExtras = {
      state: {
        design
      }
    }
    this.router.navigateByUrl('productdescription', navigationExtras);
  }
}
