import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatedetailspagePage } from './catedetailspage.page';

describe('CatedetailspagePage', () => {
  let component: CatedetailspagePage;
  let fixture: ComponentFixture<CatedetailspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatedetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
