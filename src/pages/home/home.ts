import { Component, ViewChild } from '@angular/core';
import { Tabs, Platform, IonicPage, NavController, Events } from 'ionic-angular';
import { BackButtonProvider } from '../../providers/back-button/back-button';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myTabs') tabRef: Tabs;

  //设置懒加载界面
  StaffPageRoot: any = 'StaffPage';
  ProjectPageRoot: any = 'ProjectPage';
  BirthdayPageRoot: any = 'BirthdayPage';
  PersonalPageRoot: any = 'PersonalPage';

  tabRoots: Object[];

  constructor(
    public navCtrl: NavController,
    public backButtonProvider: BackButtonProvider,
    public platform: Platform,
    public events: Events) {
    this.tabRoots = [
      {
        root: this.StaffPageRoot,
        tabTitle: '人员查询',
        tabIcon: 'people'
      },
      {
        root: this.ProjectPageRoot,
        tabTitle: '项目查询',
        tabIcon: 'pricetags'
      },
      {
        root: this.BirthdayPageRoot,
        tabTitle: '生日提醒',
        tabIcon: 'notifications'
      },
      {
        root: this.PersonalPageRoot,
        tabTitle: '个人中心',
        tabIcon: 'person'
      }
    ]

    this.platform.ready().then(() => {
      this.backButtonProvider.registerBackButtonAction(this.tabRef);
    });
  }

  ionViewDidLoad() {
    this.listenEvents();
    console.log('界面创建');
  }

  ionViewWillUnload() {
    this.events.unsubscribe('toLogin');
    console.log('界面销毁');
  }

  listenEvents() {
    this.events.subscribe('toLogin', () => {
      this.navCtrl.setRoot('LoginPage');
      console.log('返回登录');
    });
  }
}
