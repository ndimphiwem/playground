import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { DefaultComponent } from './components/default/default.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DefaultComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
