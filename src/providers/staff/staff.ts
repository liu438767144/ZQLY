import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
import { PageUtils } from '../../pages/pageUtils';

/*
  Generated class for the StaffProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaffProvider extends PageUtils{

  staffData: Object; // 保存接收的人员数据
  projectData: Object; // 保存接收的项目数据


  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public loadingCtrl: LoadingController) {
    super(alertController,loadingCtrl);
    console.log('Hello StaffProvider Provider');
    this.getStaffData();
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
      loader.dismiss();
    });
  }

  //获取项目信息
  getprojectData() {
    let loader = this.loadingCtrl.create({
      content: "正在加载数据"
    });
    loader.present();
    // 网络请求
    let path: string = '';// 请求地址
    this.http.get(path).subscribe(data => {
      this.staffData = data;
      loader.dismiss();
    });
  }

}
