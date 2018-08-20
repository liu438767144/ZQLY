import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StaffPage } from '../staff/staff';
import { ProjectPage } from '../project/project';
import { BirthdayPage } from '../birthday/birthday';
import { PersonalPage } from '../personal/personal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  StaffRoot:any = StaffPage;
  ProjectRoot:any = ProjectPage;
  BirthdayRoot:any = BirthdayPage;
  PersonalRoot:any = PersonalPage;

}
