import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountcompletePage } from './accountcomplete.page';

describe('AccountcompletePage', () => {
  let component: AccountcompletePage;
  let fixture: ComponentFixture<AccountcompletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountcompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
