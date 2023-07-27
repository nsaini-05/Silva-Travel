import { TestBed } from '@angular/core/testing';

import { CardFormDataServiceService } from './card-form-data-service.service';

describe('CardFormDataServiceService', () => {
  let service: CardFormDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFormDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
