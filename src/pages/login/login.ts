import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { ProfilePage } from '../profile/profile';
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
user = {} as User ;
  constructor(private authf :AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user:User){
    // Your app login API web service call triggers 
    try{
   const resultat = this.authf.auth.signInWithEmailAndPassword(user.email,user.password)
   this.navCtrl.setRoot(ProfilePage);
  }catch(e){console.error(e);}
  }
}

