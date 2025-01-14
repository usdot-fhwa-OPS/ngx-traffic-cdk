import { TestBed } from '@angular/core/testing';

import { SampleTrafficCdkComponentService } from './sample-traffic-cdk-component.service';

describe('SampleTrafficCdkComponentService', () => {
  let service: SampleTrafficCdkComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleTrafficCdkComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
