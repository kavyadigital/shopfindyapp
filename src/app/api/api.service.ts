import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private instance = axios.create({
  //   baseURL: "https://linktally.in/ionicpunchapp/", // Replace with your API base URL
  // });
  baseURL: any = "https://testkavyadigitalsolution.com/shopfindy/api/app";
  isloader: boolean = false;
  isnetwork: boolean = false;
constructor(
  private toastController: ToastController,private alertController: AlertController,
  private router: Router,public loadingCtrl: LoadingController,
) {}
  async postData(endpoint: string, data: any): Promise<AxiosResponse> {
    const url = `${this.baseURL}/${endpoint}`;
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  


  async loadingPresent() {
    if (this.isloader == false) {
      this.isloader = true;
      return await this.loadingCtrl.create({
        spinner: 'dots',
        cssClass: 'dataLoad',
        mode: 'md',
        backdropDismiss: false,
        showBackdrop: false
      }).then((a) => {
        a.present().then(() => {
          if (!this.isloader) {
            a.dismiss();
          }
        });
      });
    }
  }
   async loadingDismiss(): Promise<any> {
    if (this.isloader == true) {
      this.isloader = false;
      return await this.loadingCtrl.dismiss();
    }
  }
  async presentToast(msg:any,color:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'top',
      color:color
    });
    await toast.present();
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
   
        }
      }]
    });
    await alert.present();
  }

  
  // public get(url: string) {
  //   return this.instance.get(url);
  // }

  // public post(url: string, data: any) {
  //   return this.instance.post(url, data);
  // }
}