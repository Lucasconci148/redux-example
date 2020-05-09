import { NgModule } from '@angular/core';
import { Page2Component } from './page-2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Page2Component
      }
    ])
  ],
  declarations: [
    Page2Component
  ],
  providers: []
})

export class Page2Module { }
