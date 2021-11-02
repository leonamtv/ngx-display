import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenSegmentComponent } from './sixteen-segment.component';

describe('SixteenSegmentComponent', () => {
  let component: SixteenSegmentComponent;
  let fixture: ComponentFixture<SixteenSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixteenSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
