import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/service/data-local.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
})
export class HistorialScanPage implements OnInit {

  constructor(public dataLocal: DataLocalService, public alertController: AlertController, private navCtrl: NavController,) { }

  ngOnInit() {

  }

  abrirRegistro(registro){
    this.dataLocal.abrirRegistro(registro);
  }

  limpiar(){
    this.dataLocal.limpiarHistorial().then(()=>{
      this.showAlert("Historial Limpio!","El historial se ha limpiado correctamente");
    })
  }


  /* Alerta */
  async showAlert(header:string,message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["Ok"]
    });
    await alert.present();
  }


}
