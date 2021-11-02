import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDisplayModule } from 'NgxDisplayModule';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
