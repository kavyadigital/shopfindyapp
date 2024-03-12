import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.page.html',
  styleUrls: ['./enterotp.page.scss'],
})
export class EnterotpPage implements OnInit {
  data:any;
  otp:any;
  email: any;
  pass: any;
  type: any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data);
    this.type = this.data.type
    if(this.type == 'u'){
      this.email = this.data.email
      this.pass = this.data.pass
    }
    else if(this.type == 'b'){
      this.email = this.data.email
      this.pass = this.data.pass
    }
    else{
      this.presentToast('Somthing went wrong!')
    }
  }


  ngOnInit() {}
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color:'warning'
    });

    await toast.present();
  }

  onKeypress(email:any) {
    if (email !== '') {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      // Test the email against the regular expression
      const isValidEmail = re.test(String(email).toLowerCase());
  
      if (!isValidEmail) {
        email = '';
        this.presentToast('Please Enter Valid Email');
        // Additional actions for an invalid email (if needed)
      } else {
        // Additional actions for a valid email (if needed)
      }
    }
  }

  async login(otp:any) {
    if (!otp) {
      this.presentToast('Please Enter your OTP!');
      return;
    }
    const dataToSend = {
       email: this.email,
       password: this.pass,
       otp:otp
     };
     if(this.type == 'b'){
      try {
        const response = await this.api.postData('b_submitotp.php', dataToSend);
        if (response.data.status == 1) {
          localStorage.setItem('ac_status',JSON.stringify(response.data.result[0].ac_status));
          localStorage.setItem('user_temp',JSON.stringify(response.data.result[0].user_id));
          localStorage.setItem('user_type',JSON.stringify(response.data.result[0].user_type));
          this.presentToast('OTP verified successfully!');
          this.router.navigateByUrl('intro');
        } else if (response.data.status === 0) {
          this.presentToast(response.data.result);
        }
      } catch (error) {
        console.log(error);
      }
     }
     else if(this.type == 'u'){
      try {
        const response = await this.api.postData('submitotp.php', dataToSend);
        if (response.data.status == 1) {
          localStorage.setItem('ac_status',JSON.stringify(response.data.result[0].ac_status));
          localStorage.setItem('user_temp',JSON.stringify(response.data.result[0].user_id));
          localStorage.setItem('user_type',JSON.stringify(response.data.result[0].user_type));
          this.presentToast('OTP verified successfully!');
          this.router.navigateByUrl('intro');
        } else if (response.data.status === 0) {
          this.presentToast(response.data.result);
        }
      } catch (error) {
        console.log(error);
      }
     }

  
  }
}
