import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotdealPage } from './hotdeal.page';

describe('HotdealPage', () => {
  let component: HotdealPage;
  let fixture: ComponentFixture<HotdealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HotdealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
