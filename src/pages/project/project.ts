import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

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

  // 接收数据用
  listData: Object;
  path: string = 'http://jsonplaceholder.typicode.com/users'

  //搜索
  items: string[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
    // 网络请求
    this.http.request(this.path)
      .subscribe((res: Response) => {
        this.listData = res.json();
        this.initializeItems();
        // console.log(this.listData);
      });
  }

  initializeItems() {
    this.items = [];
    for (let i in this.listData) {
      this.items.push(this.listData[i].name);
      // console.log(this.listData[i].name);
      // console.log(this.items[i]);
    }
    // let arr = Object.keys(this.listData);
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
