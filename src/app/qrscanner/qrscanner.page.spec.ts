import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRscannerPage } from './qrscanner.page';

describe('QRscannerPage', () => {
  let component: QRscannerPage;
  let fixture: ComponentFixture<QRscannerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
