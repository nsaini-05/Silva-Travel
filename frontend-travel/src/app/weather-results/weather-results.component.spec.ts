import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherResultsComponent } from './weather-results.component';

describe('WeatherResultsComponent', () => {
  let component: WeatherResultsComponent;
  let fixture: ComponentFixture<WeatherResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherResultsComponent]
    });
    fixture = TestBed.createComponent(WeatherResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
