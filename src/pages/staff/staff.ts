import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffProvider } from '../../providers/staff/staff';

/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staffProvider: StaffProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
  }

  itemClick(item: Object) {
    console.log(item);
    this.navCtrl.push('StaffDetailPage', item);
  }

}
