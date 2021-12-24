import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  //pipe de componente ou diretiva -> declarations
  declarations: [
    EventsAppComponent,
    EventsListComponent

  ],
  //importar outros módulos -> imports
  imports: [
    BrowserModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //providers é para declarar services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
