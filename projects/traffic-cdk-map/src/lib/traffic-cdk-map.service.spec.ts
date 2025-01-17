import { TestBed } from '@angular/core/testing';

import { TrafficCdkMapService } from './traffic-cdk-map.service';

describe('TrafficCdkMapService', () => {
  let service: TrafficCdkMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficCdkMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
