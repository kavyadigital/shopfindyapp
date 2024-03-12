import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomepagePage } from './welcomepage.page';

describe('WelcomepagePage', () => {
  let component: WelcomepagePage;
  let fixture: ComponentFixture<WelcomepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
