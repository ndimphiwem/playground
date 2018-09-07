import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { GridComponent } from './components/grid/grid.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ImagesComponent } from './components/images/images.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PanelsComponent } from './components/panels/panels.component';
import { CardsComponent } from './components/cards/cards.component';
import { TestComponent } from './components/test/test.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'panels',
    component: PanelsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'accordion',
    component: AccordionComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
