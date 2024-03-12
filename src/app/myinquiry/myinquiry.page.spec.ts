import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyinquiryPage } from './myinquiry.page';

describe('MyinquiryPage', () => {
  let component: MyinquiryPage;
  let fixture: ComponentFixture<MyinquiryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyinquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
