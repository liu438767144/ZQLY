import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  searchQuery: string = '';
  items:string[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  initializeItems(){
    this.items = [
      'Amsterdam',
      'Bogota',
      '艾泽拉斯',
      'nurdun',
      '血小板',
      'andysh',
      '3治'
    ];
  }

  getItems(event:any){
    //Reset items back to all of the items
    this.initializeItems();

    //set val to the value of the searchbar
    let val = event.target.value;

    //if the value is an empty string dont`t filter the items
    if(val && val.trim()!=''){
      this.items = this.items.filter((item)=>{
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }
}
