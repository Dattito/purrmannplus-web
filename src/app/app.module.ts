import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexSiteComponent } from './core/pages/index-site/index-site.component';
import { NotFoundSiteComponent } from './core/pages/not-found-site/not-found-site.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PurrmannplusBackendService } from './purrmannplus-backend.service';
import { AlertComponent } from './core/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexSiteComponent,
    NotFoundSiteComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PurrmannplusBackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
