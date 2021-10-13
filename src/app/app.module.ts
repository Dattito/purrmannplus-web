import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexSiteComponent } from './core/pages/index-site/index-site.component';
import { NotFoundSiteComponent } from './core/pages/not-found-site/not-found-site.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from './config/constants';
import { ApiEndpointsService } from './api-endpoints.service';
import { PurrmannplusBackendService } from './purrmannplus-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexSiteComponent,
    NotFoundSiteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    Constants,
    ApiEndpointsService,
    PurrmannplusBackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
