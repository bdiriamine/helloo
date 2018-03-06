import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../model/profile';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { HomePage } from '../home/home';
 
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  getinfo = {
    displayName :'',
    email :'',
    photoURL :'',
    logedin : false
  };
profile = {} as Profile ; 
  constructor(private auth :AngularFireAuth,private authdata:AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
  this.getinfo.displayName = this.navParams.get('name');
  this.getinfo.email = this.navParams.get('email');
  this.getinfo.photoURL = this.navParams.get('photoURL');
  this.getinfo.logedin = this.navParams.get('logedin');
  }

  ionViewDidLoad() {
    console.log(this.getinfo.displayName + " " + this.getinfo.email + " " + this.getinfo.photoURL + " " +this.getinfo.logedin);
  }
creatprofile(){
  this.auth.authState.take(1).subscribe(auth =>{
    this.authdata.list(`profile/${auth.uid}`).push(this.profile).then(() => this.navCtrl.push(HomePage));
  })
}
}
