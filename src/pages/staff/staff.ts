import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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

  staffItems: any[];
  staffData: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
    this.getStaffData();
  }

  //列表点击事件
  itemClick(item: Object) {
    console.log(item);
    this.navCtrl.push('StaffDetailPage', item);
  }

  initializeItems() {
    this.staffItems = [];
    for (let i in this.staffData) {
      this.staffItems.push(this.staffData[i]);
      // console.log(this.items[i]);
    }
    // let arr = Object.keys(this.staffProvider.staffData);
    // for(let i = 0; i < arr.length; i++){
    //   this.items.push(this.listData[i].name);
    // }
  }

  // 获取人员信息
  getStaffData() {
    let loader = this.loadingCtrl.create({
      content: "正在加载数据"
    });
    loader.present();

    // 网络请求
    let path: string = 'http://jsonplaceholder.typicode.com/users';// 请求地址
    this.http.get(path).subscribe(data => {
      this.staffData = data;
      this.initializeItems();
      loader.dismiss();
    });
  }

  //搜索
  getItems(event: any) {
    //Reset items back to all of the items
    this.initializeItems();
    //set val to the value of the searchbar
    let val = event.target.value;
    //if the value is an empty string dont`t filter the items
    if (val && val.trim() != '') {
      this.staffItems = this.staffItems.filter((item) => {
        return (item.name.indexOf(val) > -1);
      })
    }
  }
}
