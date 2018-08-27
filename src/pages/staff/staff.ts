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
  listData: Object[];
  path: string = 'http://jsonplaceholder.typicode.com/users'

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private http: Http) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
  }

  searchInput(event: any) {
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
        console.log(this.listData);
      });
  }

  itemClick(item: Object) {
    console.log(item);
    this.navCtrl.push('StaffDetailPage', item);
  }

}
