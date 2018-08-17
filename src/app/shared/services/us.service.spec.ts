import { TestBed, inject } from '@angular/core/testing';

import { UsService } from './us.service';

describe('UsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsService]
    });
  });

  it('should be created', inject([UsService], (service: UsService) => {
    expect(service).toBeTruthy();
  }));
});
