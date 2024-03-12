import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-widhdraw',
  templateUrl: './widhdraw.page.html',
  styleUrls: ['./widhdraw.page.scss'],
})
export class WidhdrawPage implements OnInit {

  amount: any;

  constructor(private toastController: ToastController) {}

  async withdrawFunds() {
    // Implement logic to withdraw funds from the user's account
    // For demonstration purposes, let's show a toast message
    const toast = await this.toastController.create({
      message: `Withdrawn $${this.amount} from your account.`,
      duration: 2000,
      position: 'middle'
    });
    toast.present();

    // Clear the amount field after withdrawing funds
    this.amount = null;
  }
  ngOnInit() {
  }

}



