import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTrafficCdkComponentComponent } from './sample-traffic-cdk-component.component';

describe('SampleTrafficCdkComponentComponent', () => {
  let component: SampleTrafficCdkComponentComponent;
  let fixture: ComponentFixture<SampleTrafficCdkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTrafficCdkComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTrafficCdkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
