import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the StaffDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-detail',
  templateUrl: 'staff-detail.html'
})
export class StaffDetailComponent {

  // 接收数据用
  StaffData: Object;
  path: string = 'http://jsonplaceholder.typicode.com/users'

  constructor(
    public loadingCtrl: LoadingController,
    private http: Http
  ) {
    console.log('Hello StaffDetailComponent Component');
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
        this.StaffData = res.json();
      });
  }

}
