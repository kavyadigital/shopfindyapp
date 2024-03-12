import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss'],
})
export class WorkflowPage implements OnInit {

  mono: any;
  pass: any;
  ccode:any;
  user_id: any;
  email:any;
  name:any;
  lname:any;
  Title: any;
  ds: any;
  work_flow: any;
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
    this.flow();
  }
  async flow() {
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
         this.api.loadingPresent();
         const response = await this.api.postData('work_flow.php', dataToSend);
         if(response.data.status == 1){
           this.Title= response.data['result'][0]['title'];
           this.ds= response.data['result'][0]['ds'];
           this.work_flow = response.data['result'];
           this.api.loadingDismiss();
         }
         else if (response.status === 0) {
          this.api.loadingDismiss();
         }
       } catch (error) {
         console.log(error)
         this.api.loadingDismiss();
         // this.responseMessage = `Error: ${error.message}`;
       }     
   }
 
}
