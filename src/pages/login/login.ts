import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, Platform } from 'ionic-angular';
import { BackButtonProvider } from '../../providers/back-button/back-button';
import { PageUtils } from '../pageUtils';
import { Storage } from '@ionic/Storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends PageUtils {

  loginInput: loginInput;
  isRemember: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public backButtonProvider: BackButtonProvider,
    public platform: Platform,
    public stotage: Storage,
    public httpServiceProvider: HttpServiceProvider) {

    super(alertController, loadingCtrl);
    //界面数据初始化
    this.loginInput = new loginInput();
    //注册服务
    this.platform.ready().then(() => {
      this.backButtonProvider.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //登录验证
  login() {
    // this.httpServiceProvider.Login(this.loginInput.username, this.loginInput.password)
    //   .subscribe({
    //     next: response => {
    //       console.log(response);
    //       this.showLoading("正在登陆");
    //     }, error: error => {
    //       console.log(error);
    //     }, complete: () => {
    //       console.log('post complete');
    //     }
    //   })

    if (this.loginInput.username == "admin" && this.loginInput.password == "123456") {
      // loader.dismiss();
      // 记录用户是否记住密码
      let data = { username: this.loginInput.username, password: this.loginInput.password, isRemember: this.isRemember };
      // 储存用户信息
      this.stotage.remove("USER_INFO");
      this.stotage.set("USER_INFO", JSON.stringify(data));
      // 界面跳转
      this.navCtrl.setRoot('HomePage', data);
      // let modal = this.modalCtrl.create('HomePage');
      // modal.present();
    } else {
      // this.hideLoading();
      this.showAlert('失败', '账号或密码错误，请重试');
      this.loginInput = new loginInput();
    }
  }
}

class loginInput {
  public username: string = "";
  public password: string = "";
}