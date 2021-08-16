import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { NavbarStoreActions } from 'src/app/app-store/app-store.actions';
import { IAppStore } from 'src/app/app-store/app-store.interface';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html'
})
export class Page3Component {

  constructor(private store: Store<{ navBarStore: IAppStore }>){
    //hide navbar 
    const accion: Action = {
      type: NavbarStoreActions.SHOW
    }

    this.store.dispatch(accion);
  }
}
