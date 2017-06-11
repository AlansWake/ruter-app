import { TestBed, inject } from '@angular/core/testing';

import { RuterSearchService } from './ruter-search.service';

describe('RuterSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuterSearchService]
    });
  });

  it('should ...', inject([RuterSearchService], (service: RuterSearchService) => {
    expect(service).toBeTruthy();
  }));
});
