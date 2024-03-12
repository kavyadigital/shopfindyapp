import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavemycardsPage } from './savemycards.page';

describe('SavemycardsPage', () => {
  let component: SavemycardsPage;
  let fixture: ComponentFixture<SavemycardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavemycardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
