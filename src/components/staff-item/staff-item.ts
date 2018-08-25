import { Component } from '@angular/core';
import { PageBase } from '../../pages/page-base';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { StaffDetailComponent } from '../staff-detail/staff-detail';


/**
 * Generated class for the StaffItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-item',
  templateUrl: 'staff-item.html'
})
export class StaffItemComponent extends PageBase {

  // 接收数据用
  listData: Object;
  path: string = 'http://jsonplaceholder.typicode.com/users'

  constructor(
    private navctrl: NavController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private http: Http) {
    super(alertController);
    console.log('Hello StaffItemComponent Component');
    this.getData();
  }

  getData() {
    let loader = this.loadingCtrl.create({
      content: "正在加载数据"
    });
    loader.present();

    // 网络请求
    this.http.request(this.path)
      .subscribe((res: Response) => {
        loader.dismiss();
        this.listData = res.json();
      });
  }

  itemClick() {
    this.navctrl.push(StaffDetailComponent);
  }
}
