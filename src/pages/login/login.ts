import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  loginInput:loginIput;
  canLogin:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.loginInput = new loginIput();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //登录验证
  login() {
    if(this.loginInput.username == "admin" && this.loginInput.password == "123456") {
      this.navCtrl.setRoot(HomePage);
    }else {
      this.showOKAlert('错误', '登录失败，请重试');
      this.loginInput = new loginIput();
    }
  }

  //错误提示
  public showOKAlert(title: string, subTitle: string): Alert {
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
    public username:String = "";
    public password:string = "";
}