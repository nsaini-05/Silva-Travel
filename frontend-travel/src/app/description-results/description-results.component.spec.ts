import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionResultsComponent } from './description-results.component';

describe('DescriptionResultsComponent', () => {
  let component: DescriptionResultsComponent;
  let fixture: ComponentFixture<DescriptionResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionResultsComponent],
    });
    fixture = TestBed.createComponent(DescriptionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
