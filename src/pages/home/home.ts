import { Component, ViewChild } from '@angular/core';
import { Tabs, Platform } from 'ionic-angular';
import { StaffPage } from '../staff/staff';
import { ProjectPage } from '../project/project';
import { BirthdayPage } from '../birthday/birthday';
import { PersonalPage } from '../personal/personal';
import { BackButtonProvider } from '../../providers/back-button/back-button';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myTabs') tabRef: Tabs;

  tabRoots: Object[];

  constructor(
    public backButtonProvider: BackButtonProvider,
    public platform: Platform) {
    this.tabRoots = [
      {
        root: StaffPage,
        tabTitle: '人员查询',
        tabIcon: 'people'
      },
      {
        root: ProjectPage,
        tabTitle: '项目查询',
        tabIcon: 'pricetags'
      },
      {
        root: BirthdayPage,
        tabTitle: '生日提醒',
        tabIcon: 'notifications'
      },
      {
        root: PersonalPage,
        tabTitle: '个人中心',
        tabIcon: 'person'
      }
    ]

    this.platform.ready().then(() => {
      this.backButtonProvider.registerBackButtonAction(this.tabRef);
    });
  }
}
