import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.page.html',
  styleUrls: ['./transhistory.page.scss'],
})
export class TranshistoryPage implements OnInit {

  transactions: any;
  // [] = [
  //   {
  //     type: 'credit',
  //     amount: 20.0,
  //     date: new Date('2023-01-01T09:00:00Z')
  //   },
  //   {
  //     type: 'debit',
  //     amount: 20.0,
  //     date: new Date('2023-01-03T14:30:00Z')
  //   },
  // ]
 user_id: any;
  constructor(
    private toastController: ToastController,private socialSharing: SocialSharing,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.transaction_history();
  }
  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }
  async transaction_history() {
    this.user_details();
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
        const response = await this.api.postData('listoftransaction.php', dataToSend);
         if(response.data.status == 1){
          this.transactions= response.data['result'];
        }
         else if (response.status === 0) {
      
         }
       } catch (error) {
         console.log(error)
       }     
   }
  ngOnInit() {
  }

}

  

