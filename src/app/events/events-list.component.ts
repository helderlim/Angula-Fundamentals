import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/12/2001',
        time: '10:00am',
        price: 599.99,
        imgaeUrl: './assets/iamges/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'Englad'
        }
    }
}