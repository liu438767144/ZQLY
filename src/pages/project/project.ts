import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { PageUtils } from '../pageUtils';

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
export class ProjectPage extends PageUtils {

  projectItems: any;
  projectData: Object;//保存接收的项目数据

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
    console.log('ionViewDidLoad ProjectPage');
    this.showLoading("正在加载")
    this.init();
    this.hideLoading();
  }

  //获取网路请求中的数据
  init() {
    this.httpServiceProvider.getprojectData().subscribe(projectData => {
      this.projectData = projectData;
      this.initializeItems();
    });
  }

  //初始化显示列表
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

  //搜索
  getItems(event: any) {
    //初始化所有数据
    this.initializeItems();
    //获取搜索框输入中的值
    let val = event.target.value;
    //搜索框为空时不匹配数据
    if (val && val.trim() != '') {
      this.projectItems = this.projectItems.filter((item) => {
        return (item.title.indexOf(val) > -1);
      })
    }
  }
}
