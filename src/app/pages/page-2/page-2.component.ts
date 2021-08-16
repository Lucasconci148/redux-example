import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { NavbarStoreActions } from '../../app-store/app-store.actions';


@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.css']
})
export class Page2Component {

  constructor(private router: Router, private store: Store<{ navBar: boolean }>){
    //hide navbar 
    const accion: Action = {
      type: NavbarStoreActions.HIDE
    }

    this.store.dispatch(accion);
  }

  goToPage1(){
    this.router.navigateByUrl('page-1');
  }

  goToPage3(){
    this.router.navigateByUrl('page-3');
  }
}
