import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import {  ElementRef,  ViewChild } from '@angular/core';
import * as QRCode from 'qrcode-generator';
@Component({
  selector: 'app-walletpage',
  templateUrl: './walletpage.page.html',
  styleUrls: ['./walletpage.page.scss'],
})
export class WalletpagePage implements OnInit {
  // @ViewChild('qrCodeContainer', { static: true }) qrCodeContainer: any;
  balance: number = 0;
  lastTransaction: string = ' $200 on 25th December';
  user_id: any;
  user_type: any;
  referral_code:any;
  qrcode1:any;
  constructor(
    private toastController: ToastController,private socialSharing: SocialSharing,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.amount_wallet();
    this.get_code();
  }
  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type;
  }
  async amount_wallet() {
    this.user_details();
  
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
        const response = await this.api.postData('wallet_balance.php', dataToSend);
         if(response.data.status == 1){
           this.balance= response.data['result'][0]['amount'];
        }
         else if (response.status === 0) {
      
         }
       } catch (error) {
         console.log(error)
       }     
   }

   async get_code() {
    this.user_details();
    // console.log(this.user_type)
  if(this.user_type.value == 'u'){
  try {
    const dataToSend = {  
      'user_id': this.user_id
    };
   const response = await this.api.postData('profile_user.php', dataToSend);
    if(response.data.status == 1){
      this.referral_code= response.data['result'][0]['referral_code'];
   }
    else if (response.status === 0) {
 
    }
  } catch (error) {
    console.log(error)
  }  

}
if(this.user_type.value == 'b'){
  try {
    const dataToSend = {  
      'user_id': this.user_id
    };
   const response = await this.api.postData('profile_user_b.php', dataToSend);
    if(response.data.status == 1){
      this.referral_code= response.data['result'][0]['referral_code'];
   }
    else if (response.status === 0) {
 
    }
  } catch (error) {
    console.log(error)
  }  
}
         
   }

  shareApp() {
    this.socialSharing.share('Referral Code:'+this.referral_code+ ',  '+ '$20.00 will be deposited in your ShopFindy Account for signing up and you can immediately start shopping and getting Cash Back, '+ 'SHOPFINDY APP DOWNLOAD NOW ' + 'https://play.google.com/store/apps/details?id=com.ShopFindy');
  }

  addMoney() {
    this.balance += 20; 
    this.lastTransaction = `Added $1000 on ${new Date().toLocaleDateString()}`;
  }

  withdrawAmount() {
   if (this.balance >= 1000) { 
      this.balance -= 1000;
      this.lastTransaction = `Withdrawn $1000 on ${new Date().toLocaleDateString()}`;
    } else {
      console.log('Insufficient balance.');
    }
  }
  ngOnInit() {
    // this.generateQRCode('Your data goes here'); // replace with your data
  }

  // generateQRCode(text: string): void {
  //   const typeNumber = 4; // adjust as needed
  //   const errorCorrectionLevel = 'L'; // adjust as needed

  //   const qr = QRCode(typeNumber, errorCorrectionLevel);
  //   qr.addData(text);
  //   qr.make();

  //   const svgString = qr.createSvgTag();
  //   this.qrCodeContainer.nativeElement.innerHTML = svgString;
  // }
}
