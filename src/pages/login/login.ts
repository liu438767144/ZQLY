import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, Platform } from 'ionic-angular';
import { BackButtonProvider } from '../../providers/back-button/back-button';
import { PageUtils } from '../pageUtils';
import { Storage } from '@ionic/Storage';

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

  loginInput: loginIput;
  isRemember: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public backButtonProvider: BackButtonProvider,
    public platform: Platform,
    public stotage: Storage) {
    super(alertController);
    this.loginInput = new loginIput();
    this.platform.ready().then(() => {
      this.backButtonProvider.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //登录验证
  login() {
    let loader = this.loadingCtrl.create({
      content: "正在登录"
    });
    loader.present();

    if (this.loginInput.username == "admin" && this.loginInput.password == "123456") {
      loader.dismiss();
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
      loader.dismiss();
      this.showAlert('失败', '账号或密码错误，请重试');
      this.loginInput = new loginIput();
    }
  }
}

class loginIput {
  public username: String = "";
  public password: string = "";
}