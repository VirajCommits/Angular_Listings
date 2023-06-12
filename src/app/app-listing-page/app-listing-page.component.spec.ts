import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListingPageComponent } from './app-listing-page.component';

describe('AppListingPageComponent', () => {
  let component: AppListingPageComponent;
  let fixture: ComponentFixture<AppListingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppListingPageComponent]
    });
    fixture = TestBed.createComponent(AppListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
