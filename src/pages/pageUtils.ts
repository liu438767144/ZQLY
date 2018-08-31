import { AlertController, LoadingController } from 'ionic-angular';

export class PageUtils {

  loading: any;

  constructor(
    protected alertController: AlertController,
    protected loadingCtrl: LoadingController, ) {
  }

  protected showAlert(title: string, subTitle: string) {
    let alert = this.alertController.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  protected showLoading(content: string) {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
  }

  protected hideLoading() {
    this.loading.dismiss();
  }
}
