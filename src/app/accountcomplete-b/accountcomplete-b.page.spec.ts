import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountcompleteBPage } from './accountcomplete-b.page';

describe('AccountcompleteBPage', () => {
  let component: AccountcompleteBPage;
  let fixture: ComponentFixture<AccountcompleteBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountcompleteBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
