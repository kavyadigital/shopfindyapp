import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
email:any;
type:any;
constructor(
  private toastController: ToastController,
  public api: ApiService,
  private router: Router
) {}

  ngOnInit() {
  }

 async forget(email:any,type:any){
    if (!email) {
      this.api.presentToast('Please enter your Email id!','danger');
      return;
    }
    if (!type) {
      this.api.presentToast('Please Select user type!','danger');
      return;
    }
    const dataToSend = {
      email: email,
    };

if(type == 'u'){

  try {
    this.api.loadingPresent();
    const response = await this.api.postData('forget.php', dataToSend);
    if (response.data.status == 1) {
     this.api.presentToast(response.data.result,'success');
       this.router.navigateByUrl('login');
    this.api.loadingDismiss();
    } else if (response.data.status === 0) {
     this.api.presentToast(response.data.result,'warning');
     this.api.loadingDismiss();
    }
  } catch (error) {
    console.log(error);
    this.api.loadingDismiss();
  }
 
}
else if(type == 'b'){

  try {
    this.api.loadingPresent();
    const response = await this.api.postData('forgot_b.php', dataToSend);
    if (response.data.status == 1) {
      this.api.presentToast(response.data.result,'success');
       this.router.navigateByUrl('login');
       this.api.loadingDismiss();
   
    } else if (response.data.status === 0) {
      this.api.presentToast(response.data.result,'warning');
      this.api.loadingDismiss();
    }
  } catch (error) {
    console.log(error);
    this.api.loadingDismiss();
  }
 }
}

 


}
