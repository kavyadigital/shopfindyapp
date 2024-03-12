import { Component, OnInit } from '@angular/core';
import {  ElementRef,  ViewChild } from '@angular/core';
import * as QRCode from 'qrcode-generator';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QRCodePage implements OnInit {
  @ViewChild('qrCodeContainer', { static: true }) qrCodeContainer: any;
  constructor() { }

  ngOnInit() {
    this.generateQRCode('CODEME SKK'); // replace with your data
  }

  generateQRCode(text: string): void {
    const typeNumber = 4; // adjust as needed
    const errorCorrectionLevel = 'L'; // adjust as needed

    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(text);
    qr.make();

    const svgString = qr.createSvgTag();
    const modifiedSvgString = svgString.replace('<svg ', `<svg width="500" height="500" `);
    this.qrCodeContainer.nativeElement.innerHTML = modifiedSvgString;
  }
//   generateQRCodeWithLogo(text: string, logoUrl: string): void {
//     const typeNumber = 4; // adjust as needed
//     const errorCorrectionLevel = 'L'; // adjust as needed

//     const qr = QRCode(typeNumber, errorCorrectionLevel);
//     qr.addData(text);
//     qr.make();

//     const svgString = qr.createSvgTag();
//     const modifiedSvgString = svgString.replace('<svg ', `<svg width="500" height="500" `);

//     // Calculate the position for the logo in the center
//     const logoSize = 100; // Adjust the logo size as needed
//     const xPosition = (500 - logoSize) / 2;
//     const yPosition = (500 - logoSize) / 2;

//     // Add the image element for the logo
//     const logoSvg = `<image x="${xPosition}" y="${yPosition}" width="${logoSize}" height="${logoSize}" xlink:href="${logoUrl}" />`;

//     // Insert the logoSvg before the closing </svg> tag
//     const finalSvgString = modifiedSvgString.replace('</svg>', `${logoSvg}</svg>`);

//     // Set the modified SVG string to the container
//     this.qrCodeContainer.nativeElement.innerHTML = finalSvgString;
// }
}
