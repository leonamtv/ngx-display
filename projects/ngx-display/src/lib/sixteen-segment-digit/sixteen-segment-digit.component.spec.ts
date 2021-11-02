import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenSegmentDigitComponent } from './sixteen-segment-digit.component';

describe('SixteenSegmentDigitComponent', () => {
  let component: SixteenSegmentDigitComponent;
  let fixture: ComponentFixture<SixteenSegmentDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixteenSegmentDigitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenSegmentDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
