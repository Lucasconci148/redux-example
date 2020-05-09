import { NgModule } from '@angular/core';
import { Page1Component } from './page-1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Page1Component
      }
    ])
  ],
  declarations: [
    Page1Component
  ],
  providers: []
})
export class Page1Module { }
