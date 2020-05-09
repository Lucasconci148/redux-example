import { NgModule } from '@angular/core';
import { Page3Component } from './page-3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Page3Component
      }
    ])
  ],
  declarations: [
    Page3Component
  ],
  providers: []
})

export class Page3Module { }
