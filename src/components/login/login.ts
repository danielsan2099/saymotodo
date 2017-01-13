import { Component, Input } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
/*
  Generated class for the Login component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
declare var window: any;

@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class Login {
  @Input() titulo: string;
  tit_btn_login: string;

  constructor(public navCtrl: NavController, private platform: Platform) {
    console.log(this.titulo);
  }
  ngOnInit(){
    console.log(this.titulo);
  }
  public login(platform: Platform) {
      this.platform.ready().then(() => {
          this.userLogin().then(success => {
              alert(success.access_token);
          }, (error) => {
              alert(error);
          });
      });
  }
  public userLogin(): Promise<any>{
      return new Promise(function(resolve, reject) {

      });
  }
}
