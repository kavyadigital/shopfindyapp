import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefreralPage } from './refreral.page';

describe('RefreralPage', () => {
  let component: RefreralPage;
  let fixture: ComponentFixture<RefreralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefreralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
