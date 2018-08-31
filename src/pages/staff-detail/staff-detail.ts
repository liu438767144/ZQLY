import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaffDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-detail',
  templateUrl: 'staff-detail.html',
})
export class StaffDetailPage {

  item: Object;
  company: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    //获取并解析从 StaffPage 传过来的数据
    this.item = this.navParams.data;
    this.company = this.navParams.data.company;
    console.log(this.item);
    console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffDetailPage');
  }

}
