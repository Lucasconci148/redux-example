import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './pages/page-1/page-1.module';
import { Page3Module } from './pages/page-3/page-3.module';
import { Page2Module } from './pages/page-2/page-2.module';

//ngrx
import { StoreModule } from '@ngrx/store';

//Dev Tools 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

//importamos el reducer
import { appReducer } from './app-store/app-store.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Page1Module,
    Page2Module,
    Page3Module,
    AppRoutingModule,

    //IMPORTAMOS EL MODULO DEL STORE con estructura del estado
    StoreModule.forRoot({ navBarStore: appReducer }),

    //IMPORTAMOS EL DEVTOOLS PARA UTILIZAR LA EXTENSION DE CHROME
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Cantidad de estados a guardar
      logOnly: environment.production // No generamos log para produccion. 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
