import { Component } from '@angular/core';

/**
 * Generated class for the ProjectItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-item',
  templateUrl: 'project-item.html'
})
export class ProjectItemComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectItemComponent Component');
    this.text = 'Hello World';
  }

}
