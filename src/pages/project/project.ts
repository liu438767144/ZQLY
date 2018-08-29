import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffProvider } from '../../providers/staff/staff';


/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  //搜索
  items: string[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staffProvider: StaffProvider) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  initializeItems() {
    this.items = [];
    for (let i in this.staffProvider.staffData) {
      this.items.push(this.staffProvider.staffData[i].name);
      console.log(this.items[i]);
    }
    // let arr = Object.keys(this.staffProvider.staffData);
    // for(let i = 0; i < arr.length; i++){
    //   this.items.push(this.listData[i].name);
    // }
  }

  getItems(event: any) {
    //Reset items back to all of the items
    this.initializeItems();
    //set val to the value of the searchbar
    let val = event.target.value;
    //if the value is an empty string dont`t filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
