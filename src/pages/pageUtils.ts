import { AlertController, LoadingController } from 'ionic-angular';

export class PageUtils {

  constructor(
    protected alertController: AlertController,
    protected loadingCtrl: LoadingController) {
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
