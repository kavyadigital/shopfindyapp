import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsreleasePage } from './newsrelease.page';

describe('NewsreleasePage', () => {
  let component: NewsreleasePage;
  let fixture: ComponentFixture<NewsreleasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsreleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
