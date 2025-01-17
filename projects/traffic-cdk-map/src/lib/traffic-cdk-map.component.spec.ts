import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficCdkMapComponent } from './traffic-cdk-map.component';

describe('TrafficCdkMapComponent', () => {
  let component: TrafficCdkMapComponent;
  let fixture: ComponentFixture<TrafficCdkMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficCdkMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficCdkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
