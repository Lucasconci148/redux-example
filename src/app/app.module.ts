import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './pages/page-1/page-1.module';
import { Page3Module } from './pages/page-3/page-3.module';
import { Page2Module } from './pages/page-2/page-2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Page1Module,
    Page2Module,
    Page3Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
