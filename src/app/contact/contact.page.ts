import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  mono: any;
  pass: any;
  ccode:any;
  user_id: any;
  email:any;
  name:any;
  lname:any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }
  ngOnInit() {
    this.contact();
  }
  async contact() {
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
         this.api.loadingPresent();
         const response = await this.api.postData('contact_us.php', dataToSend);
         if(response.data.status == 1){
           this.email= response.data['result'][0]['email'];
           this.mono= response.data['result'][0]['phone'];
           this.api.loadingDismiss();
         }
         else if (response.status === 0) {
          this.api.loadingDismiss();
         }
       } catch (error) {
         console.log(error)
       }     
   }
 
}
