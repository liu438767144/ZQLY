import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert, LoadingController, ModalController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BackButtonProvider } from '../../providers/back-button/back-button';

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
export class LoginPage {

  loginInput: loginIput;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public backButtonProvider: BackButtonProvider,
    private platform: Platform) {
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
      content: "正在验证"
    });
    loader.present();

    if (this.loginInput.username == "admin" && this.loginInput.password == "123456") {
      loader.dismiss();
      // this.navCtrl.push(HomePage);
      let modal = this.modalCtrl.create(HomePage);
      modal.present();
    } else {
      loader.dismiss();
      this.showAlert('错误', '登录失败，请重试');
      this.loginInput = new loginIput();
    }
  }

  //错误提示
  public showAlert(title: string, subTitle: string): Alert {
    let alert = this.alertController.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
    return alert;
  }
}

class loginIput {
  public username: String = "";
  public password: string = "";
}