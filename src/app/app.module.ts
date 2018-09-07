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
import { TabComponent } from './components/tabs/tab.component';
import { PanelsComponent } from './components/panels/panels.component';
import { CardsComponent } from './components/cards/cards.component';
import { TestComponent } from './components/test/test.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContentComponent } from './components/content/content.component';

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
    TabComponent,
    PanelsComponent,
    CardsComponent,
    TestComponent,
    AccordionComponent,
    ContentComponent
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
