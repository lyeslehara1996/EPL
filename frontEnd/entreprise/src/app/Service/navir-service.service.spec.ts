import { TestBed } from '@angular/core/testing';

import { NavirServiceService } from './navir-service.service';

describe('NavirServiceService', () => {
  let service: NavirServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavirServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
