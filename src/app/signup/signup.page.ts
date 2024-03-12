import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // isloader: boolean = false;
  // isnetwork: boolean = false;
email:any;
mono:any;
ccode:any;
pass:any;
name:any;
lname:any;
constructor(
  private toastController: ToastController,
  public api: ApiService,
  private router: Router,public loadingCtrl: LoadingController,
) {

  // setInterval(() => {
  //   this.buffer += 0.06;
  //   this.progress += 0.06;

  //   // Reset the progress bar when it reaches 100%
  //   // to continuously show the demo
  //   if (this.progress > 1) {
  //     setTimeout(() => {
  //       this.buffer = 0.06;
  //       this.progress = 0;
  //     }, 1000);
  //   }
  // }, 1000);
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


async signup(name:any,lname:any,mono:any,email:any,pass:any) {
  
  if (!name) {
    this.presentToast('Please Enter Your Name!');
    return;
  }
 

  if (!lname) {
    this.presentToast('Please Enter your Last Name!');
    return;
  }

  if (!mono) {
    this.presentToast('Please Enter Your Mobile!');
    return;
  }
  if (!email) {
    this.presentToast('Please Enter Your Email!');
    return;
  }

  if (!pass) {
    this.presentToast('Please Enter Your Email!');
    return;
  }

  const dataToSend = {
    name:name,
    lname:lname,
     mono: mono,
     email:email,
     pass: pass,
    };
    try {
      this.api.loadingPresent();
    const response = await this.api.postData('signup.php', dataToSend);
    if (response.data.status == 1) {
    
        this.presentToast(response.data.result);
          let navigationExtras: NavigationExtras = {
            state: {
              email:email,
              pass: pass,
              type:'u'
            },
          };
      this.router.navigateByUrl('enterotp', navigationExtras);
        // this.router.navigateByUrl('enterotp');
   this.api.loadingDismiss();
       } else if (response.data.status === 0) {
        this.api.loadingDismiss();
      this.presentToast(response.data.result);
    }
  } catch (error) {
    console.log(error);
    this.api.loadingDismiss();
    }
}
//  async loadingPresent() {
//   if (this.isloader == false) {
//     this.isloader = true;
//     return await this.loadingCtrl.create({
//       spinner: 'dots',
//       cssClass: 'dataLoad',
//       mode: 'md',
//       backdropDismiss: false,
//       showBackdrop: false
//     }).then((a) => {
//       a.present().then(() => {
//         if (!this.isloader) {
//           a.dismiss();
//         }
//       });
//     });
//   }
// }
//  async loadingDismiss(): Promise<any> {
//   if (this.isloader == true) {
//     this.isloader = false;
//     return await this.loadingCtrl.dismiss();
//   }
// }
}

