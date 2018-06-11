import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public response:any;
  //public brandresult:any;
 responseData : any;
 public popularcategorylist:any;
 public categorylist:any;
public loguser:any;
public type:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,
    public loadingCtrl: LoadingController,  public menu: MenuController, public myApp:MyApp,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onCart() {
    this.navCtrl.push('CartPage');
  }

  onSearch() {
    this.navCtrl.push('SearchnewPage');
  }

  
}
