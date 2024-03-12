import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-savemycards',
  templateUrl: './savemycards.page.html',
  styleUrls: ['./savemycards.page.scss'],
})
export class SavemycardsPage implements OnInit {
  savedCards: any;
  user_id: any;
  constructor(
    private toastController: ToastController,
    private socialSharing: SocialSharing,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {
    this.card_history();
  }
  user_details() {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }

  addcard() {
    this.router.navigateByUrl('/addcard');
  }

  async card_history() {
    this.user_details();
    try {
      const dataToSend = {
        user_id: this.user_id,
      };
      const response = await this.api.postData('mycard_list.php', dataToSend);
      if (response.data.status == 1) {
        this.savedCards = response.data['result'];
      } else if (response.status === 0) {
      }
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {
    this.card_history();
  }
  async deletecard(card: any) {
    const alert = await this.alertController.create({
      header: 'Remove Card?',
      message: 'Are you sure you want to Remove this card Details?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {},
        },
        {
          text: 'Yes',
          handler: async () => {
            try {
              const dataToSend = {
                user_id: card.user_id,
                id: card.id,
              };
              const response = await this.api.postData(
                'delete_card.php',
                dataToSend
              );
              if (response.data.status == 1) {
                this.card_history();
              } else if (response.status === 0) {
              }
            } catch (error) {
              console.log(error);
            }
          },
        },
      ],
    });
    await alert.present();
  }
}
