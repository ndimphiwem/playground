import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

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
import { TabsComponent } from './components/tabs/tabs.component';
import { PanelsComponent } from './components/panels/panels.component';
import { CardsComponent } from './components/cards/cards.component';

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
    UtilitiesComponent,
    TabsComponent,
    PanelsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({ theme: 'atelier-dune-light' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
