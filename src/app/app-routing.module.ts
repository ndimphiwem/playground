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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
