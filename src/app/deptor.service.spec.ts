import { TestBed, inject } from '@angular/core/testing';

import { DeptorService } from './deptor.service';

describe('DeptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeptorService]
    });
  });

  it('should be created', inject([DeptorService], (service: DeptorService) => {
    expect(service).toBeTruthy();
  }));
});
