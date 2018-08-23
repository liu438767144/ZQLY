import { Component } from '@angular/core';

/**
 * Generated class for the StaffDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-detail',
  templateUrl: 'staff-detail.html'
})
export class StaffDetailComponent {

  text: string;

  constructor() {
    console.log('Hello StaffDetailComponent Component');
    this.text = 'Hello World';
  }

}
