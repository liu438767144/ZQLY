import { AlertController } from 'ionic-angular';

export class PageUtils {

  constructor(
    protected alertController: AlertController) {
  }

  protected showAlert(title: string, subTitle: string) {
    let alert = this.alertController.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
