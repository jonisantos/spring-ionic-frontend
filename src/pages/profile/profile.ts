import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { StorageService } from "../../app/services/storage.service";

IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})

export class ProfilePage{

    email: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: StorageService){

        }

        ionViewDidLoad(){
            let localUser = this.storage.getLocaUser();
            if(localUser && localUser.email){
                this.email = localUser.email;
            }
        }
}