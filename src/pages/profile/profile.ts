import { Component } from '@angular/core';
import { IonicPage, NavController,App, NavParams } from 'ionic-angular';
import { Profile } from '../../model/profile';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ContactPage } from '../contact/contact';
import { WelcomePage } from '../welcome/welcome';
import { Observable } from 'rxjs/Observable';
 
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
  
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
   nbr : number=0;
 
  tab3Root = ContactPage;
profile = {} as Profile ; 
  constructor( public navCtrl: NavController, public navParams: NavParams,public app: App,db: AngularFireDatabase) {
  this.getinfo.displayName = this.navParams.get('name');
  this.getinfo.email = this.navParams.get('email');
  this.getinfo.photoURL = this.navParams.get('photoURL');
  this.getinfo.logedin = this.navParams.get('bolez');
  this.itemsRef = db.list('Mure');
  // Use snapshotChanges().map() to store the key
  this.items = this.itemsRef.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });
  }

  ionViewDidLoad() {
    console.log();
  }

logout(){
  // Remove API token 
  this.app.getRootNav().setRoot(WelcomePage);
  
}
addItem(newName: string ,nbr :number,comm:number ) {
  this.itemsRef.push({ text: newName, nb:nbr , com : comm  });
}
updateItem(key: string, newText: string) {
  this.itemsRef.update(key, { text: newText });
}
deleteItem(key: string) {    
  this.itemsRef.remove(key); 
}
deleteEverything() {
  this.itemsRef.remove();
}  
ajouterjm(key: string,nbrr:number){
  nbrr=nbrr+1;
  this.itemsRef.update(key, { nb: nbrr });
  
}
}
