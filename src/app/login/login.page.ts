import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mono: any;
  pass: any;
  ccode:any;
  email:any;
  type:any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router
  ) {}

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

  async login(email: any, pass: any,type:any) {
    // console.log(type);
    if (!email) {
      this.presentToast('Please Enter your Email to login!');
      return;
    }
    if (!pass) {
      this.presentToast('Please Enter Your Password!');
      return;
    }
    if (!type) {
      this.presentToast('Please Select user type!');
      return;
    }


    const dataToSend = {
      'email': email,
      'password': pass,
    };
    this.api.loadingPresent();
  
    if(this.type == 'b'){
      try {
        const response = await this.api.postData('login_b.php', dataToSend);
        if (response.data.status == 1) {
          this.api.loadingDismiss();
          localStorage.setItem('user',JSON.stringify(response.data.result[0].user_id));
          localStorage.setItem('user_type',JSON.stringify(response.data.result[0].user_type));
          localStorage.setItem('code',JSON.stringify(response.data.result[0].referral_code));
          this.presentToast('Successfully Logged In!');
          this.router.navigateByUrl('');
          window.location.reload();
        } else if (response.data.status === 0) {
          this.presentToast(response.data.result);
          this.api.loadingDismiss();
        }
      } catch (error) {
        console.log(error);
        this.api.loadingDismiss();
      }


    }
    else if(this.type == 'u'){
      try {
        const response = await this.api.postData('login.php', dataToSend);
        if (response.data.status == 1) {
          this.api.loadingDismiss();
          localStorage.setItem('user',JSON.stringify(response.data.result[0].user_id));
          localStorage.setItem('user_type',JSON.stringify(response.data.result[0].user_type));
          localStorage.setItem('code',JSON.stringify(response.data.result[0].referral_code));
          this.presentToast('Successfully Logged In!');
          this.router.navigateByUrl('');
          window.location.reload();
        } else if (response.data.status === 0) {
          this.api.loadingDismiss();
          this.presentToast(response.data.result);
        }
      } catch (error) {
        this.api.loadingDismiss();
        console.log(error);
       }
    }
  }
}
