import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'page-1',
    loadChildren: './pages/page-1/page-1.module#Page1Module'
  },
  {
    path: 'page-2',
    loadChildren: './pages/page-2/page-2.module#Page2Module'
  },
  {
    path: 'page-3',
    loadChildren: './pages/page-3/page-3.module#Page3Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
