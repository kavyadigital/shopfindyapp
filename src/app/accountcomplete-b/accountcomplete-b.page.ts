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
  selector: 'app-accountcomplete-b',
  templateUrl: './accountcomplete-b.page.html',
  styleUrls: ['./accountcomplete-b.page.scss'],
})
export class AccountcompleteBPage implements OnInit {
  r_code: any;
  isloader: boolean = false;
  isnetwork: boolean = false;
  email: any;
  mono: any;
  pass: any;
  name: any;
  lname: any;
  user_id: any;
  address: any;
  user_b: any;
  city: any;
  state: any;
  list_of_state: any;
  id: any;
  b_land: any;
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {
    this.myProfile();
    this.get_state();
  }

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
  user_details() {
    const user = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user_temp')!)
    );
    this.user_id = user.value;
  }
  async myProfile() {
    this.user_details();
    try {
      const dataToSend = {
        user_id: this.user_id,
      };
      const response = await this.api.postData(
        'getprofileforcomplete_b.php',
        dataToSend
      );
      if (response.data.status == 1) {
        this.email = response.data['result'][0]['b_email'];
        this.mono = response.data['result'][0]['b_mono'];
        this.pass = response.data['result'][0]['b_pass'];
        this.name = response.data['result'][0]['business_name'];
        this.b_land = response.data['result'][0]['b_land'];
        this.id = response.data['result'][0]['id'];
      } else if (response.status === 0) {
      }
    } catch (error) {
      console.log(error);
    }
  }
  async completeaccount(
    user_b: any,
    address: any,
    city: any,
    state: any,
    r_code: any
  ) {
    if (!user_b) {
      this.presentToast('Please Enter your business owner name!');
      return;
    }
    if (!address) {
      this.presentToast('Please Enter your address!');
      return;
    }
    if (!city) {
      this.presentToast('Please Enter your city!');
      return;
    }

    if (!state) {
      this.presentToast('Please Enter your state!');
      return;
    }
    if (!r_code) {
      r_code = 'XXXXXX';
    }
    this.user_details();
    try {
      this.loadingPresent();
      const dataToSend = {
        user_id: this.user_id,
        address: address,
        city: city,
        state: state,
        user_b: user_b,
        r_code: r_code,
        email: this.email,
      };
      const response = await this.api.postData('completeAC_b.php', dataToSend);
      if (response.data.status == 1) {
        const user = localStorage.removeItem('user');
        const user_temp = localStorage.removeItem('user_temp');
        const ac_status = localStorage.removeItem('ac_status');
        this.presentToast(response.data.result);
        window.location.reload();
        this.loadingDismiss();
      } else if (response.status === 0) {
        this.list_of_state = '';
        this.loadingDismiss();
      }
    } catch (error) {
      console.log(error);
      this.loadingDismiss();
    }
  }
  async get_state() {
    this.user_details();
    try {
      const dataToSend = {
        user_id: this.user_id,
      };

      const response = await this.api.postData('state_list.php', dataToSend);
      if (response.data.status == 1) {
        this.list_of_state = response.data['result'];
      } else if (response.status === 0) {
        this.list_of_state = '';
      }
    } catch (error) {
      console.log(error);
    }
  }
  async loadingPresent() {
    if (this.isloader == false) {
      this.isloader = true;
      return await this.loadingCtrl
        .create({
          spinner: 'dots',
          cssClass: 'dataLoad',
          mode: 'md',
          backdropDismiss: false,
          showBackdrop: false,
        })
        .then((a) => {
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
}
