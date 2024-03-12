import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidhdrawPage } from './widhdraw.page';

describe('WidhdrawPage', () => {
  let component: WidhdrawPage;
  let fixture: ComponentFixture<WidhdrawPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WidhdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
