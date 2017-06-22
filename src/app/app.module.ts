import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RuterComponent } from './ruter/ruter.component';
import { RuterSearchComponent } from './ruter-search/ruter-search.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdGridListModule, MdCardModule, MdToolbarModule, MdListModule } from '@angular/material';

import { RuterService } from './ruter.service';

@NgModule({
  declarations: [
    AppComponent,
    RuterComponent,
    RuterSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdCardModule,
    MdToolbarModule,
    MdListModule,
    MdButtonModule
  ],
  providers: [RuterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
