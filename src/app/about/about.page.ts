import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  cardNumber: any;
  expiryDate: any;
  cvc: any;
  mono: any;
  pass: any;
  ccode: any;
  user_id: any;
  email: any;
  listofdata: any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {
    this.about();
  }

  ngOnInit() {}
  async about() {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const loading = this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      spinner: 'circles',
    });
    try {
      const dataToSend = {
        user_id: this.user_id,
      };
      this.api.loadingPresent();
      const response = await this.api.postData('about.php', dataToSend);
      if (response.data.status == 1) {
        this.listofdata = response.data.result;
        this.api.loadingDismiss();
      } else if (response.status === 0) {
        this.api.loadingDismiss();
      }
    } catch (error) {
      this.api.loadingDismiss();
      console.log(error);
    }
  }
}
