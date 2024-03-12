import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletpagePage } from './walletpage.page';

describe('WalletpagePage', () => {
  let component: WalletpagePage;
  let fixture: ComponentFixture<WalletpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WalletpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
