import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public alertController: AlertController, private router:Router, private menuCtrl: MenuController) { }
//  public text : string;

  ngOnInit() {}
  presionarMenu(){
    this.menuCtrl.toggle();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout',
      message: 'Realmente desea salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (res) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Salir',
          id: 'confirm-button',
          handler: () => {
            this.router.navigateByUrl('login');
          }
        }
      ]
    });

    await alert.present();
  }

}
