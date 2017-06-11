import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RuterComponent } from './ruter/ruter.component';
import { RuterSearchComponent } from './ruter-search/ruter-search.component';

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
    HttpModule
  ],
  providers: [RuterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
