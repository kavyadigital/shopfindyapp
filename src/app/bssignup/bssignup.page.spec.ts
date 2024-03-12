import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BSsignupPage } from './bssignup.page';

describe('BSsignupPage', () => {
  let component: BSsignupPage;
  let fixture: ComponentFixture<BSsignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BSsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
