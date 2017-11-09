import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFoundComponent';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
    
  
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
