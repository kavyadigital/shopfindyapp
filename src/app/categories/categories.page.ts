import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  routerState: any;
  title: any;
  colorScheme: any;
  selectedIcons: any[] = [];
  roomSize: any;
  preferredMaterials: any;
  user_id: any;
  isloader: any;
  stores: any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.myProfile();
    this.get_store_list();
  }
  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }
  async myProfile() {
    this.user_details();
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
        const response = await this.api.postData('getprofileforcomplete.php', dataToSend);
         if(response.data.status == 1){
        }
         else if (response.status === 0) {
         }
       } catch (error) {
         console.log(error)
       }     
   }
   async get_store_list() {
    this.user_details();
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
         const response = await this.api.postData('store_list.php', dataToSend);
         if(response.data.status == 1){
          this.stores = response.data['result'];
         }
         else if (response.status === 0) {
         }
       } catch (error) {
         console.log(error)
       }     
   }
   async loadingPresent() {
    if (this.isloader == false) {
      this.isloader = true;
      return await this.loadingCtrl.create({
        spinner: 'dots',
        cssClass: 'dataLoad',
        mode: 'md',
        backdropDismiss: false,
        showBackdrop: false
      }).then((a) => {
        a.present().then(() => {
          if (!this.isloader) {
            a.dismiss();
          }
        });
      });
    }
  }
   async loadingDismiss(): Promise<any> {
    if (this.isloader == true) {
      this.isloader = false;
      return await this.loadingCtrl.dismiss();
    }
  }
  ngOnInit() {
  }
  selectCategory(test:any){
    const navigationExtras: NavigationExtras = {
      state: {
        title:test
      }
    }
    this.router.navigateByUrl('catedetailspage', navigationExtras);
  }
}
