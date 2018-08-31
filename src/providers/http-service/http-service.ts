import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient,
    public loadingCtrl: LoadingController) {
    console.log('Hello HttpServiceProvider Provider');
  }

  // 获取人员信息
  getStaffData(): Observable<Object> {
    let path: string = 'http://jsonplaceholder.typicode.com/users';// 请求地址
    return this.http.get(path);
  }

    //获取项目信息
    getprojectData(): Observable<Object> {
      let path: string = 'https://jsonplaceholder.typicode.com/albums';// 请求地址
      return this.http.get(path);
    }

}
