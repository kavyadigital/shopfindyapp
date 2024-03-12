import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user_id: any;
  user_id_t: any;
  name: any;
  lname: any;
  email: any;
  mono: any;
  address: any;
  city: any;
  state: any;
  np:any;
  cnp:any;
  remark:any; 
  user_type: any;
//////////////////////////////////////////////////////////

business_name:any;
b_address:any;
b_city:any;
b_email:any;
b_land:any;
b_mono:any;
b_satate:any;
b_user:any;

/////////////////////////////////////////////////////////

  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.myProfile();
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type;
  }

  ngOnInit() {}
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

  // onKeypress(email: any) {
  //   if (email != '') {
  //     const re =
  //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     this.mono = re.test(String(email).toLowerCase());
  //     if (this.mono != true) {
  //       this.presentToast('Please Enter Valid Email');

  //       this.email = '';
  //       return;
  //     }
  //   }
  // }


logout(){
  const user = localStorage.removeItem('user');
  const user_type = localStorage.removeItem('user_type');
  {
    this.router.navigateByUrl('login');
    window.location.reload();
  };
  }

  user_details(){
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type;
  }


  async deletemyaccount(email:any,remark:any){
    this.user_details(); 
    if(!email){
        this.api.presentToast('enter your email email id','danger');
      }

      if(remark == null || remark == undefined || remark == ''){
       remark  = 'other'
      }
      else{
      }
      const alert = await this.alertController.create({
        header: 'Delete account',
        message: 'Are you sure you want to delete this account?',
        buttons: [{
          text: 'Cancel',
          handler: () => {
            this.api.presentToast('Thank You!!! Welcome Back','warning')
            }
        },{
              text: 'Yes',
              handler: async () => {
                try {
                  const dataToSend = {  
                    'user_id': this.user_id,
                    'email':email,
                    'remark':remark

                  };
                  const response = await this.api.postData('deletemyaccount.php', dataToSend);
                  if(response.data.status == 1){
                 this.api.presentToast(response.data.result,'success')
                   }
                  else if (response.status === 0) {
               
                  }
                } catch (error) {
                  console.log(error)
                }  
          }
        }]
      });
      await alert.present();
  }



  async deletemyaccount_b(b_email:any,remark:any){
    this.user_details(); 
    if(!b_email){
        this.api.presentToast('enter your email email id','danger');
      }

      if(remark == null || remark == undefined || remark == ''){
       remark  = 'other'
      }
      else{
      }
      const alert = await this.alertController.create({
        header: 'Delete account',
        message: 'Are you sure you want to delete this account?',
        buttons: [{
          text: 'Cancel',
          handler: () => {
            this.api.presentToast('Thank You!!! Welcome Back','warning')
            }
        },{
              text: 'Yes',
              handler: async () => {
                try {
                  const dataToSend = {  
                    'user_id': this.user_id,
                    'b_email':b_email,
                    'remark':remark

                  };
                  const response = await this.api.postData('deletemyaccount_b.php', dataToSend);
                  if(response.data.status == 1){
                 this.api.presentToast(response.data.result,'success')
                   }
                  else if (response.status === 0) {
               
                  }
                } catch (error) {
                  console.log(error)
                }  
          }
        }]
      });
      await alert.present();
  }


  async myProfile() {
    this.user_details();
    if(this.user_type.value == 'u'){
      try {
        const dataToSend = {  
          'user_id': this.user_id
        };

        const response = await this.api.postData('profile_user.php', dataToSend);
        if(response.data.status == 1){
         this.user_id_t= response.data['result'][0]['user_id'];
          this.name= response.data['result'][0]['name'];
          this.lname= response.data['result'][0]['last_name'];
          this.email= response.data['result'][0]['email'];
          this.mono= response.data['result'][0]['mobile'];
          this.address= response.data['result'][0]['address'];
          this.city= response.data['result'][0]['city'];
          this.state= response.data['result'][0]['state'];
         }
        else if (response.status === 0) {
     
        }
      } catch (error) {
        console.log(error)
  
      }  
    }
    if(this.user_type.value == 'b'){
       try {
         const dataToSend = {  
           'user_id': this.user_id
         };
         const response = await this.api.postData('profile_user_b.php', dataToSend);
         if(response.data.status == 1){
          this.user_id_t= response.data['result'][0]['user_id'];
          this.business_name= response.data['result'][0]['business_name'];
          this.b_address= response.data['result'][0]['b_address'];
           this.b_city= response.data['result'][0]['b_city'];
           this.b_email= response.data['result'][0]['b_email'];
           this.b_land= response.data['result'][0]['b_land'];
           this.b_mono= response.data['result'][0]['b_mono'];
           this.b_satate= response.data['result'][0]['b_satate'];
           this.b_user= response.data['result'][0]['b_user'];
          }
         else if (response.status === 0) {
      
         }
       } catch (error) {
         console.log(error)
   
       }     
      }
   }
 

   async updatepassword(np:any,cnp:any){
    if (!np) {
      this.api.presentToast('Please enter your new password!','danger');
      return;
    }
    if (!cnp) {
      this.api.presentToast('Please enter your confirm new password!','danger');
      return;
    }

    if (np != cnp) {
      this.api.presentToast('New password and new confirm password are not matched!!','danger');
      return;
    }
      const dataToSend = {
      user_id:this.user_id,
      np:np,
      cnp:cnp
      };
      try {
      this.api.loadingPresent();
      const response = await this.api.postData('updatepassword.php', dataToSend);

      if (response.data.status == 1) {
        this.api.presentToast(response.data.message,'success');
        this.myProfile();
        this.api.loadingDismiss();
      } else if (response.data.status === 0) {
        this.api.loadingDismiss();
        this.api.presentToast(response.data.message,'warning');
      }
    } catch (error) {
      console.log(error);
      this.api.loadingDismiss();
      this.api.presentToast('something went wrong!','danger');
    }


   }

   async updatepassword_b(np:any,cnp:any){
    if (!np) {
      this.api.presentToast('Please enter your new password!','danger');
      return;
    }
    if (!cnp) {
      this.api.presentToast('Please enter your confirm new password!','danger');
      return;
    }

    if (np != cnp) {
      this.api.presentToast('New password and new confirm password are not matched!!','danger');
      return;
    }
      const dataToSend = {
      user_id:this.user_id,
      np:np,
      cnp:cnp
      };
      try {
      this.api.loadingPresent();
      const response = await this.api.postData('updatepassword_b.php', dataToSend);

      if (response.data.status == 1) {
        this.api.presentToast(response.data.message,'success');
        this.myProfile();
        this.api.loadingDismiss();
      } else if (response.data.status === 0) {
        this.api.loadingDismiss();
        this.api.presentToast(response.data.message,'warning');
      }
    } catch (error) {
      console.log(error);
      this.api.loadingDismiss();
      this.api.presentToast('something went wrong!','danger');
    }
   }
  async updatedetails(user_id_t:any,name:any,lname:any,email:any,mono:any,address:any,city:any,state:any) {
    if (!user_id_t) {
      this.api.presentToast('Please enter your user id!','danger');
      return;
    }
    if (!name) {
      this.api.presentToast('Please enter your name!','danger');
      return;
    }

    if (!lname) {
      this.api.presentToast('Please Enter your last!','danger');
      return;
    }
    if (!email) {
      this.api.presentToast('Please Enter your email!','danger');
      return;
    }

    if (!mono) {
      this.api.presentToast('Please Enter mobile number!','danger');
      return;
    }

    if (!address) {
      this.api.presentToast('Please Enter your address!','danger');
      return;
    }
    if (!city) {
      this.api.presentToast('Please Enter Your city!','danger');
      return;
    }
    if (!state) {
      this.api.presentToast('Please Enter Your State!','danger');
      return;
    }
    const dataToSend = {
      user_id_t:user_id_t,
      name:name,
      lname:lname,
      email:email,
       mono: mono,
       address:address,
       city:city,
       state:state
      };

    try {
      this.api.loadingPresent();
      const response = await this.api.postData('updateprofile.php', dataToSend);
      if (response.data.status == 1) {
        this.api.presentToast(response.data.result,'success');
        this.myProfile();
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
  //////////////////////////////////////////////////////////////////


  async updatedetails_b(user_id_t:any,business_name:any,b_user:any,b_email:any,b_mono:any,b_land:any,b_address:any,b_city:any,b_satate:any) {
    if (!user_id_t) {
      this.api.presentToast('Please enter your user id!','danger');
      return;
    }
    if (!business_name) {
      this.api.presentToast('Please enter your business name!','danger');
      return;
    }

    if (!b_user) {
      this.api.presentToast('Please Enter business owner name!','danger');
      return;
    }
    if (!b_email) {
      this.api.presentToast('Please Enter your email!','danger');
      return;
    }

    if (!b_mono) {
      this.api.presentToast('Please Enter mobile number!','danger');
      return;
    }

    if (!b_address) {
      this.api.presentToast('Please Enter your address!','danger');
      return;
    }


    if (!b_city) {
      this.api.presentToast('Please Enter Your city!','danger');
      return;
    }
    if (!b_satate) {
      this.api.presentToast('Please Enter Your State!','danger');
      return;
    }
    const dataToSend = {
      'user_id_t':user_id_t,
      'business_name':business_name,
      'b_user':b_user,
      'b_email':b_email,
      'b_mono':b_mono,
      'b_land':b_land,
      'b_address':b_address,
      'b_city':b_city,
      'b_satate':b_satate
      };

    try {
      this.api.loadingPresent();
      const response = await this.api.postData('updateprofile_b.php', dataToSend);
      if (response.data.status == 1) {
        this.api.presentToast(response.data.result,'success');
        this.myProfile();
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
