import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bssignup',
  templateUrl: './bssignup.page.html',
  styleUrls: ['./bssignup.page.scss'],
})
export class BSsignupPage implements OnInit {
  b_name: any;
  b_email: any;
  b_mono: any;
  b_land: any;
  b_city: any;
  b_address: any;
  b_user: any;
  b_pass: any;

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
      color: 'warning',
    });

    await toast.present();
  }

  onKeypress(email: any) {
    if (email !== '') {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValidEmail = re.test(String(email).toLowerCase());
      if (!isValidEmail) {
        email = '';
        this.presentToast('Please Enter Valid Email');
      } else {
      }
    }
  }
  async signup(
    b_name: any,
    b_email: any,
    b_mono: any,
    b_land: any,
    b_pass: any
  ) {
    if (!b_name) {
      this.presentToast('Please Enter Business Name!');
      return;
    }
    if (!b_email) {
      this.presentToast('Please Enter Business Email!');
      return;
    }

    if (!b_mono) {
      this.presentToast('Please Enter Your Mobile number!');
      return;
    }
    if (!b_pass) {
      this.presentToast('Please Enter Password!');
      return;
    }
    const dataToSend = {
      b_name: b_name,
      b_email: b_email,
      b_mono: b_mono,
      b_land: b_land,
      b_pass: b_pass,
    };
    try {
      this.api.loadingPresent();
      const response = await this.api.postData('b_signup.php', dataToSend);
      if (response.data.status == 1) {
        this.api.loadingDismiss();
        this.presentToast(response.data.result);
        let navigationExtras: NavigationExtras = {
          state: {
            email: b_email,
            pass: b_pass,
            type: 'b',
          },
        };
        this.router.navigateByUrl('enterotp', navigationExtras);
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
