import { TestBed, inject } from '@angular/core/testing';

import { RealtimeConvertService } from './realtime-convert.service';

describe('RealtimeConvertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeConvertService]
    });
  });

  it('should ...', inject([RealtimeConvertService], (service: RealtimeConvertService) => {
    expect(service).toBeTruthy();
  }));
});
