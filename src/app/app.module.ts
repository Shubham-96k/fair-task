import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FairsComponent } from './components/fairs/fairs.component';
import { TofairComponent } from './components/tofair/tofair.component';
import { FairdetailsComponent } from './components/fairs/fairdetails/fairdetails.component';
import { FaircardsComponent } from './components/fairs/faircards/faircards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FairsComponent,
    TofairComponent,
    FairdetailsComponent,
    FaircardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
