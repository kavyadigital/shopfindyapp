import { Component, Optional } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: any;
  user_login_status: any;
  user_ac_status: any;
  user_temp: any;
  user_type: any;
  constructor(private alertController: AlertController,private platform: Platform,private router: Router,
    @Optional() private routerOutlet?: IonRouterOutlet
    ) {
      this.checklgon();
     this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(0, async () => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else {
          // If there are no pages to go back to, exit the app
          this.confirmExit();
        }
      });
    });
  }

  logout(){
    const user = localStorage.removeItem('user');
    const user_type = localStorage.removeItem('user_type');
    const ac_status = localStorage.removeItem('ac_status');
    const user_temp = localStorage.removeItem('user_temp');
    const code = localStorage.removeItem('code');
    {
    this.router.navigateByUrl('login');
      window.location.reload();
    };
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


    confirmExit() {
      this.alertController
        .create({
          header: 'Exit App',
          subHeader: 'Are you sure you want to exit the app?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Exit',
              handler: () => {
                // Use the Platform service to exit the app
                if (this.platform.is('cordova')) {
                  const cordovaNavigator: any = navigator;
                  if (cordovaNavigator && cordovaNavigator.app && typeof cordovaNavigator.app.exitApp === 'function') {
                    cordovaNavigator.app.exitApp();
                  } else {
                    console.error('Exit app function not available in this environment.');
                  }
                }
                
              },
            },
          ],
        })
        .then(alert => {
          alert.present();
        });
    }


    checklgon(){
      const ac_status = new BehaviorSubject(JSON.parse(localStorage.getItem('ac_status')!));
      this.user_ac_status = ac_status;
      const user_temp = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
      this.user_temp = user_temp;
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type;
      const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = user;
      if(this.user_ac_status.value == null || this.user_ac_status.value == '' || this.user_ac_status.value == undefined){
         if(this.user.value == null || this.user.value == '' || this.user.value == undefined){
          this.user_login_status = false;
          this.router.navigateByUrl('login');
        }
        else if(this.user.value != null || this.user.value != '' || this.user.value != undefined){
          this.user_login_status = true;
          this.router.navigateByUrl('home');
        }
      }
      else if(this.user_ac_status.value == '0' && this.user_temp.value != null || this.user_temp.value != undefined)
        {
          if(this.user.value == null || this.user.value == '' || this.user.value == undefined){
            this.user_login_status = false;
            this.router.navigateByUrl('intro');
          }
    
       }
       else if(this.user.value != null || this.user.value != '' || this.user.value != undefined){
        this.user_login_status = true;
        this.router.navigateByUrl('home');
       }
    }

    products(){
      this.router.navigateByUrl('products');
    }
    selectCategory(test:any){

      const navigationExtras: NavigationExtras = {
        state: {
          title:'Modern Living Room'
        }
      }
      this.router.navigateByUrl('categories', navigationExtras);
  
  
    }
}
