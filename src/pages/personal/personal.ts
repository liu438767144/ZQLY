import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  username: string;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public events: Events,
    public storage: Storage) {
    storage.ready().then(() => {
      storage.get('USER_INFO').then(
        (value: string) => {
          this.username = value ? JSON.parse(value).username : "";
        }
      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

  logout(): void {
    // let modal = this.modalCtrl.create('LoginPage');
    // modal.present();
    this.events.publish('toLogin');
  }
}
