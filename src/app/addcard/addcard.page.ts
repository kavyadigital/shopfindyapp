import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.page.html',
  styleUrls: ['./addcard.page.scss'],
})
export class AddcardPage implements OnInit {
  user: any;

  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router
  ) {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = user;
  }
  card_no: any;
  exe_month: any;
  exe_year: any;
  cvv: any;
  card_holder: any;
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

  async save_card(
    card_no: any,
    exe_month: any,
    exe_year: any,
    cvv: any,
    card_holder: any
  ) {
    let len = card_no.length;
    if (len < '16') {
      this.presentToast('Please Enter 16 Digit Card!');
      return;
    }
    if (!card_no) {
      this.presentToast('Please Enter your Card Number!');
      return;
    }
    if (!exe_month) {
      this.presentToast('Please Enter Card Exp. Month!');
      return;
    }
    if (!exe_year) {
      this.presentToast('Please Enter Card Exp Year!');
      return;
    }

    if (!cvv) {
      this.presentToast('Please Enter CVV Number!');
      return;
    }
    if (!card_holder) {
      this.presentToast('Please Enter Card Holder Name!');
      return;
    }
    const dataToSend = {
      card_no: card_no,
      exe_month: exe_month,
      exe_year: exe_year,
      cvv: cvv,
      card_holder: card_holder,
      user_id: this.user.value,
    };
    try {
      const response = await this.api.postData(
        'save_card_details.php',
        dataToSend
      );
      if (response.data.status == 1) {
        this.presentToast('Successfully Saved Card Details!');
        this.router.navigateByUrl('savemycards');
      } else if (response.data.status === 0) {
        this.presentToast(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
