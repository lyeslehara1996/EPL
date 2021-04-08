import { TestBed } from '@angular/core/testing';

import { ConsignataireService } from './consignataire.service';

describe('ConsignataireService', () => {
  let service: ConsignataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsignataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
