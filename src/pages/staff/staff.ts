import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { PageUtils } from '../pageUtils';

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
export class StaffPage extends PageUtils {

  staffItems: any;
  staffData: Object;//保存接收的人员数据

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    public httpServiceProvider: HttpServiceProvider) {
    super(alertController, loadingCtrl);
  }

  ionViewDidLoad() {
    this.showLoading("正在加载")
    this.init();
    this.hideLoading();
  }

  //获取网路请求中的数据
  init() {
    this.httpServiceProvider.getStaffData().subscribe(staffData => {
      this.staffData = staffData;
      this.initializeItems();
    });
  }

  //初始化显示列表
  initializeItems() {
    this.staffItems = [];
    for (let i in this.staffData) {
      this.staffItems.push(this.staffData[i]);
      // console.log(this.staffItems[i]);
    }
    // let arr = Object.keys(this.staffProvider.staffData);
    // for(let i = 0; i < arr.length; i++){
    //   this.items.push(this.listData[i].name);
    // }
  }

  //列表点击事件
  itemClick(item: Object) {
    console.log(item);
    this.navCtrl.push('StaffDetailPage', item);
  }

  //搜索
  getItems(event: any) {
    //初始化所有数据
    this.initializeItems();
    //获取搜索框输入中的值
    let val = event.target.value;
    //搜索框为空时不匹配数据
    if (val && val.trim() != '') {
      this.staffItems = this.staffItems.filter((item) => {
        return (item.name.indexOf(val) > -1);
      })
    }
  }
}
