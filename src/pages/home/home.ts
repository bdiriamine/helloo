import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private authf :AngularFireAuth , private toast :ToastController, public navCtrl: NavController , public app: App) {

  }
  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
}
ionViewDidLoad() {
  console.log('ionViewDidLoad HomePage');
}
}
