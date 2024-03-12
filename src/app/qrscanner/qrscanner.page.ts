import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QRscannerPage implements OnInit {
  constructor(private barcodeScanner: BarcodeScanner) {}

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(JSON.stringify(barcodeData))
    }).catch(err => {
      console.error('Error while scanning barcode', err);
      alert(err)
    });
  }
  ngOnInit() {
}
}