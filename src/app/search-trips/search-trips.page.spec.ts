import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTripsPage } from './search-trips.page';

describe('SearchTripsPage', () => {
  let component: SearchTripsPage;
  let fixture: ComponentFixture<SearchTripsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
