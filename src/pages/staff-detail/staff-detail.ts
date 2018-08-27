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

  // name: string;
  // username: string;
  // website: string;
  // company: Object[];
  // email: string;
  // phone: string;

  item: Object;
  company: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffDetailPage');
    this.item = this.navParams.data;
    this.company = this.navParams.data.company;
    // this.name = this.navParams.get('name');
    // this.username = this.navParams.get('username');
    // this.website = this.navParams.get('website');
    // this.company = this.navParams.get('company.name');
    // this.email = this.navParams.get('email');
    // this.phone = this.navParams.get('phone');
    // console.log(this.name + ',' + this.username + ',' + this.website + ',' + this.company + ',' + this.email + ',' + this.phone);
    console.log(this.item);
  }

}
