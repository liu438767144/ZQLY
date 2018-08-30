import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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

  projectData: Object; // 保存接收的项目数据
  projectItems: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
    this.getprojectData();
  }

  initializeItems() {
    this.projectItems = [];
    for (let i in this.projectData) {
      this.projectItems.push(this.projectData[i]);
      // console.log(this.projectItems[i]);
    }
    // let arr = Object.keys(this.staffProvider.staffData);
    // for(let i = 0; i < arr.length; i++){
    //   this.items.push(this.listData[i].name);
    // }
  }

  //获取项目信息
  getprojectData() {
    let loader = this.loadingCtrl.create({
      content: "正在加载数据"
    });
    loader.present();
    // 网络请求
    let path: string = 'https://jsonplaceholder.typicode.com/albums';// 请求地址
    this.http.get(path).subscribe(data => {
      this.projectData = data;
      this.initializeItems();
      loader.dismiss();
    });
  }

  getItems(event: any) {
    //Reset items back to all of the items
    this.initializeItems();
    //set val to the value of the searchbar
    let val = event.target.value;
    //if the value is an empty string dont`t filter the items
    if (val && val.trim() != '') {
      this.projectItems = this.projectItems.filter((item) => {
        return (item.title.indexOf(val) > -1);
      })
    }
  }
}
