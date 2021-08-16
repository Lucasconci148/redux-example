import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppStore } from './app-store/app-store.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'redux-example';
  showNavBar =  true;

  constructor(
    private router: Router,
    private store: Store<{ navBarStore: IAppStore }>){
      this.getStoreState();
  }

  getStoreState() {
    this.store.subscribe(
      (state) => {
        this.showNavBar = state.navBarStore.show;
      });
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
