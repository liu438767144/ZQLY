import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, Events } from 'ionic-angular';
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

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public events: Events) {
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
