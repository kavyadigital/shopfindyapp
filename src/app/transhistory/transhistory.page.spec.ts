import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranshistoryPage } from './transhistory.page';

describe('TranshistoryPage', () => {
  let component: TranshistoryPage;
  let fixture: ComponentFixture<TranshistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TranshistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
