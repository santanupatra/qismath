import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchnew',
  templateUrl: 'searchnew.html',
})
export class SearchnewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

 
  onSearchResult() {
    this.navCtrl.setRoot('SearchResultPage');
  }
}
