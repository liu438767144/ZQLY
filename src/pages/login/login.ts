import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, Platform, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BackButtonProvider } from '../../providers/back-button/back-button';
import { PageBase } from '../page-base';

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
export class LoginPage extends PageBase {

  loginInput: loginIput;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public backButtonProvider: BackButtonProvider,
    public platform: Platform) {
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
      content: "正在验证..."
    });
    loader.present();

    if (this.loginInput.username == "admin" && this.loginInput.password == "123456") {
      // this.navCtrl.push(HomePage);
      loader.dismiss();
      let modal = this.modalCtrl.create(HomePage);
      modal.present();
    } else {
      loader.dismiss();
      this.showAlert('错误', '登录失败，请重试');
      this.loginInput = new loginIput();
    }
  }
}

class loginIput {
  public username: String = "";
  public password: string = "";
}