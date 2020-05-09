import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-example';

  constructor(private router: Router){
  }

  goToPage1(){
    this.router.navigateByUrl('page-1');
  }

  goToPage2(){
    this.router.navigateByUrl('page-2');
  }

  goToPage3(){
    this.router.navigateByUrl('page-3');
  }
}
