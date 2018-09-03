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

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
    console.log('Hello HttpServiceProvider');
  }

  //登录
  Login(loginUserName: string, loginPassword: string): Observable<Object> {
    let path: string = '';
    let body = { username: loginUserName, password: loginPassword };
    return this.http.post(path, JSON.stringify(body));
  }

  // 获取人员信息
  getStaffData(): Observable<Object> {
    // let path: string = 'http://39.108.111.147:8080/api/getAllUser';//人员请求地址
    let path: string = '../assets/json/staff.json';//本地人员测试请求地址
    return this.http.get(path);
  }

  //获取项目信息
  getprojectData(): Observable<Object> {
    let path: string = 'http://jsonplaceholder.typicode.com/users';//项目请求地址
    return this.http.get(path);
  }

}
