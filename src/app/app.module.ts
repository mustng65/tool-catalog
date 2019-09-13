import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './core/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppSettings } from './core/app-settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: (appSettingsSvc: AppSettings) => { return ()=>appSettingsSvc.loadAppSettings() }, deps: [AppSettings], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
