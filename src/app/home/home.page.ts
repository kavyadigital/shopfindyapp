import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latestDesigns:any;
  latestDesigns5:any;
  latestDesigns10:any;
  latestDesigns20:any;
  mono: any;
  pass: any;
  ccode:any;
  user_id: any;
  email:any;
  name:any;
  lname:any;
  imageUrl:any = 'https://testkavyadigitalsolution.com/shopfindy/api/admin/uploads/';
  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    // this.myProfile()
  }

  ngOnInit() {
    this.get_hot_deal();
    this.get_5hot_deal();
    this.get_10hot_deal();
    this.get_20hot_deal();
  }

  async get_hot_deal(){
    const dataToSend = {
     user_id:this.user_id
   };
  try {
    const response = await this.api.postData('rendom_hot_list.php', dataToSend);
    if (response.data.status == 1) {
      this.latestDesigns = response.data.result
      // this.presentToast(response.data.result);
      // this.myProfile();
    } else if (response.data.status == 0) {
      // this.presentToast(response.data.result);
    }
  } catch (error) {
    console.log(error);
    // this.responseMessage = `Error: ${error.message}`;
  }
}

async get_5hot_deal(){
  const dataToSend = {
   user_id:this.user_id
 };
try {
  const response = await this.api.postData('hot_list5.php', dataToSend);
  if (response.data.status == 1) {
    this.latestDesigns5 = response.data.result
    // this.presentToast(response.data.result);
    // this.myProfile();
  } else if (response.data.status == 0) {
    // this.presentToast(response.data.result);
  }
} catch (error) {
  console.log(error);
  // this.responseMessage = `Error: ${error.message}`;
}
}

async get_20hot_deal(){
  const dataToSend = {
   user_id:this.user_id
 };
try {
  const response = await this.api.postData('hot_list20.php', dataToSend);
  if (response.data.status == 1) {
    this.latestDesigns20 = response.data.result
    // this.presentToast(response.data.result);
    // this.myProfile();
  } else if (response.data.status == 0) {
    // this.presentToast(response.data.result);
  }
} catch (error) {
  console.log(error);
  // this.responseMessage = `Error: ${error.message}`;
}
}

async get_10hot_deal(){
  const dataToSend = {
   user_id:this.user_id
 };
try {
  const response = await this.api.postData('hot_list20.php', dataToSend);
  if (response.data.status == 1) {
    this.latestDesigns10 = response.data.result
    // this.presentToast(response.data.result);
    // this.myProfile();
  } else if (response.data.status == 0) {
    // this.presentToast(response.data.result);
  }
} catch (error) {
  console.log(error);
  // this.responseMessage = `Error: ${error.message}`;
}
}



  notification(){
    this.router.navigateByUrl('notification');
  }
  selectCategory(test:any){
    const navigationExtras: NavigationExtras = {
      state: {
        title:test
      }
    }
    this.router.navigateByUrl('catedetailspage', navigationExtras);
}

detsils(design:any){
  const navigationExtras: NavigationExtras = {
    state: {
      design
    }
  }
  this.router.navigateByUrl('productdescription', navigationExtras);
}
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color:'warning'
    });
   await toast.present();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      spinner: 'circles',
    });
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Logout?',
      message: 'Are you sure you want to logout?',
      buttons: [{
        text: 'Cancel',
        handler: () => {}
      },{
            text: 'Yes',
            handler: () => {
            this.logout()
        }
      }]
    });
    await alert.present();
  }

  onKeypress(email: any) {
    if (email != '') {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.mono = re.test(String(email).toLowerCase());
      if (this.mono != true) {
        this.presentToast('Please Enter Valid Email');

        this.email = '';
        return;
      }
    }
  }


logout(){
  const user = localStorage.removeItem('user');
  {
    this.router.navigateByUrl('intro');
    window.location.reload();
  };
  }

  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
  }

  // async myProfile() {
  //   this.user_details();
  //      const loading =  this.loadingCtrl.create({
  //        message: 'Loading...',
  //        duration: 1000,
  //        spinner: 'circles',
  //      });
  //      try {
  //        const dataToSend = {  
  //          'user_id': this.user_id
  //        };
 
  //        const response = await this.api.postData('profile.php', dataToSend);
  //        if(response.data.status == 1){
  //          this.email= response.data['result'][0]['email'];
  //          this.mono= response.data['result'][0]['mobile'];
  //          this.pass= response.data['result'][0]['pass'];
  //          this.ccode= response.data['result'][0]['c_code'];
  //          this.name= response.data['result'][0]['name'];
  //          this.lname= response.data['result'][0]['l_name'];
  //        }
  //        else if (response.status === 0) {
      
  //        }
  //      } catch (error) {
  //        console.log(error)

  //      }     
  //  }
 
  async login(name:any,lname:any,mono: any, pass: any,email:any, ccode:any) {
    if (!name) {
      this.presentToast('Please enter your name!');
      return;
    }
 

    if (!ccode) {
      this.presentToast('Please Select your country code!');
      return;
    }

    if (!mono) {
      this.presentToast('Please Enter mobile number!');
      return;
    }

    if (!pass) {
      this.presentToast('Please Enter Your Password!');
      return;
    }
    if (!email) {
      this.presentToast('Please Enter Your Email id!');
      return;
    }
    const dataToSend = {
      name:name,
      lname:lname,
       mono: mono,
       password: pass,
       c_code:ccode,
       email:email,
       user_id:this.user_id
     };

    try {
      const response = await this.api.postData('updateprofile.php', dataToSend);

      if (response.data.status == 1) {
        this.presentToast(response.data.result);
        // this.myProfile();
      } else if (response.data.status === 0) {
        this.presentToast(response.data.result);
      }
    } catch (error) {
      console.log(error);
      // this.responseMessage = `Error: ${error.message}`;
    }
  }
}
