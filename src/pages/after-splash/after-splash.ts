import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AfterSplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-after-splash',
  templateUrl: 'after-splash.html',
})
export class AfterSplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfterSplashPage');
  }
  
	onLogin() {
		this.navCtrl.push('LoginnewPage');
	}
  onSignup(){
    this.navCtrl.push('SignupPage');
  }
}
