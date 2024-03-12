import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(
    private toastController: ToastController,
    public api: ApiService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    
  }

  ngOnInit() {
  }
  register(){
    this.router.navigateByUrl('tabspage');
  };
  home(){
    this.router.navigateByUrl('tabspage');
  }

}
