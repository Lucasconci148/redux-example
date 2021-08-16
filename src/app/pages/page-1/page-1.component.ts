import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { NavbarStoreActions } from 'src/app/app-store/app-store.actions';
import { IAppStore } from 'src/app/app-store/app-store.interface';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html'
})
export class Page1Component {

  constructor(private store: Store<{ navBarStore: IAppStore }>){
    //hide navbar 
    const accion: Action = {
      type: NavbarStoreActions.SHOW
    }

    this.store.dispatch(accion);
  }
  
}
