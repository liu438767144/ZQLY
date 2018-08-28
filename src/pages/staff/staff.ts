import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

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

  // 接收数据用
  listData: Object;
  path: string = 'http://jsonplaceholder.typicode.com/users'

  //搜索
  searchData: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
    this.loadData();
  }

  initializeItems() {
    for (let i in this.listData) {
      console.log(i);
      this.searchData.push(this.listData[i].name);
      // console.log(this.listData[i].name);
      // console.log(this.searchData[i]);
    }
  }

  searchInput(event: any) {
    //Reset items back to all of the items
    this.initializeItems();

    //set val to the value of the searchbar
    let val = event.target.value;

    //if the value is an empty string dont`t filter the items
    if (val && val.trim() != '') {
      this.searchData = this.searchData.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  loadData() {
    let loader = this.loadingCtrl.create({
      content: "正在加载数据"
    });
    loader.present();

    // 网络请求
    this.http.request(this.path)
      .subscribe((res: Response) => {
        loader.dismiss();
        this.listData = res.json();
        this.initializeItems();
        // console.log(this.listData);
      });
  }

  itemClick(item: Object) {
    console.log(item);
    this.navCtrl.push('StaffDetailPage', item);
  }

}
