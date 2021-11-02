import { NgModule } from '@angular/core';
import { SevenSegmentComponent } from './seven-segment/seven-segment.component';
import { SevenSegmentDigitComponent } from './seven-segment-digit/seven-segment-digit.component';
import { SixteenSegmentComponent } from './sixteen-segment/sixteen-segment.component';
import { SixteenSegmentDigitComponent } from './sixteen-segment-digit/sixteen-segment-digit.component';

@NgModule({
  declarations: [
    SevenSegmentComponent,
    SevenSegmentDigitComponent,
    SixteenSegmentComponent,
    SixteenSegmentDigitComponent
  ],
  imports: [
  ],
  exports: [
    SevenSegmentComponent,
    SevenSegmentDigitComponent,
    SixteenSegmentComponent,
    SixteenSegmentDigitComponent
  ],
  entryComponents: [
    SevenSegmentComponent,
    SevenSegmentDigitComponent,
    SixteenSegmentComponent,
    SixteenSegmentDigitComponent
  ]
})
export class NgxDisplayModule { }
