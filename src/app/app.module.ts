import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

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
import { ProfileComponent } from './profile/profile.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    RuterComponent,
    RuterSearchComponent,
    RuterItemComponent,
    CallbackComponent,
    ProfileComponent,
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
  providers: [
    RuterService,
    RealtimeConvertService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
