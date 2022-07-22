import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



import { DemoDatepickerDateInitialStateComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoDatepickerDateInitialStateComponent],
  imports: [
    BsDatepickerModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoDatepickerDateInitialStateComponent]
})
export class AppModule {
}
