import { Action } from '@ngrx/store';
import { IAppStore, initialState } from './app-store.interface';
import { NavbarStoreActions } from './app-store.actions';

export function appReducer(state = initialState, action: Action) : IAppStore {

    switch(action.type) {

        case NavbarStoreActions.SHOW: 
            return { show: true };
            
        case NavbarStoreActions.HIDE:
            return { show: false } ;

        default: 
            return state;
    }
}