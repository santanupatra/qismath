import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-loginnew',
  templateUrl: 'loginnew.html',
})
export class LoginnewPage {

public loguser:any;
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public device_type: AbstractControl;
  public device_token_id: AbstractControl;


  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  isLoggedIn: boolean = false;
  users: any;
  constructor(
    private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public authService: AuthServiceProvider,
    private storage: Storage,    
    public loadingCtrl: LoadingController,
    private myApp:MyApp) {

    
    
  }

  

  



  ionViewDidLoad() {
  
    this.menu.enable(false, 'loggedOutMenu');
    console.log('ionViewDidLoad LoginnewPage');

  //  console.log("ABCDEFGHIJ", localStorage.getItem('userData'));
  }


  forgetpass(){
   
    this.navCtrl.push("ForgetpassPage");
  }



  onSignup() {
    this.navCtrl.push('SignupPage');
  }
  
  home() {
    this.navCtrl.setRoot('HomePage');
  }

}
