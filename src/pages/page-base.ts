import { AlertController, Alert } from 'ionic-angular';

export class PageBase {
  constructor(protected alertController: AlertController) {
  }

  protected showAlert(title: string, subTitle: string): Alert {
    let alert = this.alertController.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
    return alert;
  }
}
