import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { DefaultComponent } from './components/default/default.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ImagesComponent } from './components/images/images.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DefaultComponent,
    HeaderComponent,
    ButtonsComponent,
    TypographyComponent,
    FormsComponent,
    ModalsComponent,
    ImagesComponent,
    UtilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
