import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username : string = "";
  password : string = "";
  cpassword: string = "";

  constructor(public alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  async registrar() {
    const {username, password, cpassword} = this
    if(password !== cpassword){
      this.showAlert("Error!", "Las contraseñas no coinciden");
    }
    try{
      // const res = await 
      this.showAlert("Usuario Registrado", "Bienvenido "+username)
      this.route.navigate(['login'])
    } catch(err){
      console.dir(err);
      this.showAlert("Error", err.message);
    }
    // const alert = await this.alertController.create({
    //   cssClass: 'my-custom-class',
    //   header: 'Registro',
    //   message: 'Se ha registrado exitosamente',
    //   buttons: [
    //     {
    //       text: 'Ok',
    //       id: 'confirm-button',
    //       handler: () => {
    //         this.router.navigateByUrl('/login');
    //       }
    //     }
    //   ]
    // });
    // await alert.present();
  }
  async showAlert(header:string,message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
  }

}
