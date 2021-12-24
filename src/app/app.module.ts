import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  //pipe de componente ou diretiva -> declarations
  declarations: [
    EventsAppComponent
  ],
  //importar outros módulos -> imports
  imports: [
    BrowserModule
  ],
  //providers é para declarar services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
