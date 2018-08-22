import { Component } from '@angular/core';

/**
 * Generated class for the StaffItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-item',
  templateUrl: 'staff-item.html'
})
export class StaffItemComponent {

  items: Array<{number: string, name: string, department: string}>;

  constructor() {
    console.log('Hello StaffItemComponent Component');
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        number: 'NO.' + i,
        name: 'TOM' + i,
        department: "宣传部"
      });
    }
  }

}
