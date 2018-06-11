import { Component ,ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  public id:any;
 public loguser:any;
 //public type:any;
  public istype:any;

  public path:any;
  constructor(platform: Platform,
    private storage: Storage, statusBar: StatusBar, 
    splashScreen: SplashScreen) {

      platform.ready().then(()=>{
       
    
      
      this.storage.get('uid').then(val => {
        this.id =val;
    
    //alert(val);
            if(this.id!=""){
              this.nav.setRoot('AfterSplashPage');
             
        }else{
          //location.reload();
          //this.nav.setRoot('AdvertisePage');
          this.nav.setRoot('AfterSplashPage');
        }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
  // });
  });



})
  }

  public logout(){
    this.storage.ready().then(() => {
      const data=localStorage.getItem("userData");
localStorage.removeItem('userData');
localStorage.setItem('userData',"");
    this.storage.set("uid","");

   this.nav.setRoot('LoginnewPage');
  });
}

/*abc(){
 // alert("jdh")
  this.loguser =  JSON.parse(localStorage.getItem('userData'));   
  if(this.loguser){
    
    console.log("USERINFOOOOO",this.loguser.user_type);
  if(this.loguser.user_type=="1"){
    this.istype=0;
  }else if(this.loguser.user_type=="2"){
    this.istype=1;
  }
  }

}*/

  
  /*public myaccount(){
   
      this.nav.push('MyaccountPage');
     
      }


public changepassword(){ 
  
    this.nav.push('ChangepasswordPage');
    
    }*/

    public login(){       
        this.nav.push('LoginnewPage');        
    }
    public onCart(){       
        this.nav.push('CartPage');        
    }
    public onSellGear(){       
      this.nav.push('SellStep1Page');        
    }

    
    
    
    


}