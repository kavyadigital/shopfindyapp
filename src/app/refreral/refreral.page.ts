import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-refreral',
  templateUrl: './refreral.page.html',
  styleUrls: ['./refreral.page.scss'],
})
export class RefreralPage implements OnInit {
  user_id: any;
  referrals: any;
  isloader: any;
  code:any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.myProfile();
    this.get_state();
  }

  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const code  = new BehaviorSubject(JSON.parse(localStorage.getItem('code')!));
    this.code = code.value;
  }
  async myProfile() {
    this.user_details();
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
        const response = await this.api.postData('getprofileforcomplete.php', dataToSend);
         if(response.data.status == 1){
          //  this.email= response.data['result'][0]['email'];
          //  this.mono= response.data['result'][0]['mobile'];
          //  this.pass= response.data['result'][0]['pass'];
          //  this.name= response.data['result'][0]['name'];
          //  this.lname= response.data['result'][0]['last_name'];
          //  this.id= response.data['result'][0]['id'];
        }
         else if (response.status === 0) {
      
         }
       } catch (error) {
         console.log(error)
         // this.responseMessage = `Error: ${error.message}`;
       }     
   }

   async get_state() {
    this.user_details();
       try {
         const dataToSend = {  
           'user_id': this.code
         };
         const response = await this.api.postData('my_referrals.php', dataToSend);
         if(response.data.status == 1){
          this.referrals = response.data['result'];

         }
         else if (response.status === 0) {
          // this.list_of_state = '';
  
         }
       } catch (error) {
         console.log(error)
         // this.responseMessage = `Error: ${error.message}`;
        //  this.loadingDismiss();
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
    // this.routerState = this.router.getCurrentNavigation()?.extras.state
    // console.log(this.routerState)
    // this.title = this.routerState['title'];
    // console.log(this.title)
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
