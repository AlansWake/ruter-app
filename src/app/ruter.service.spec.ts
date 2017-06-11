import { TestBed, inject } from '@angular/core/testing';

import { RuterService } from './ruter.service';

describe('RuterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuterService]
    });
  });

  it('should ...', inject([RuterService], (service: RuterService) => {
    expect(service).toBeTruthy();
  }));
});
