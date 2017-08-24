import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RuterComponent } from './ruter/ruter.component';
import { RuterSearchComponent } from './ruter-search/ruter-search.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdMenuModule, MdGridListModule,
         MdCardModule, MdToolbarModule, MdListModule, MdSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { RuterService } from '../services/ruter.service';
import { RealtimeConvertService } from '../services/realtime-convert.service';
import { AuthService } from '../services/auth.service';
import { RuterItemComponent } from './ruter-item/ruter-item.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    RuterComponent,
    RuterSearchComponent,
    RuterItemComponent,
    CallbackComponent,
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
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
    AppRoutingModule,

  ],
  providers: [RuterService, RealtimeConvertService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
