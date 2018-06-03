import { TestBed, inject } from '@angular/core/testing';

import { DeptorMessageService } from './deptor-message.service';

describe('DeptorMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeptorMessageService]
    });
  });

  it('should be created', inject([DeptorMessageService], (service: DeptorMessageService) => {
    expect(service).toBeTruthy();
  }));
});
