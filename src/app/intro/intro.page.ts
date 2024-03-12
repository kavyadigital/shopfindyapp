import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  user_ac_status: any;
  user_temp:any;
  user_type:any;
  user:any;

  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    const ac_status = new BehaviorSubject(JSON.parse(localStorage.getItem('ac_status')!));
    this.user_ac_status = ac_status;
    const user_temp = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
    this.user_temp = user_temp;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type;
    console.log(this.user_type.value)
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = user;
  }

  ngOnInit() {
    const ac_status = new BehaviorSubject(JSON.parse(localStorage.getItem('ac_status')!));
    this.user_ac_status = ac_status;
    const user_temp = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
    this.user_temp = user_temp;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type;
   
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = user;
  }
  register(){
    this.router.navigateByUrl('tabspage');
  };
  home(){
    this.router.navigateByUrl('tabspage');
  }

}
