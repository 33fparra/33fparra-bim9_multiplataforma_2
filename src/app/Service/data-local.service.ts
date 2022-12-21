import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';



@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

  guardados: Registro[] = [];


  constructor(private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) {
    this.cargaStorage();

  }

  ngOnInit() {

  }

  /* Cargar */

  async cargaStorage(){
    this.guardados = (await this.storage.get('registros') || [])
  }


  /* Guardar */

  async guardarRegistro(format: string, text: string){
    await this.cargaStorage();

    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    //console.log(this.guardados);

    this.storage.set('registros', this.guardados);

    this.abrirRegistro(nuevoRegistro);
  }



  /* Abrir */

  abrirRegistro(registro: Registro){
    switch (registro.type){
      case 'http':
        // abre navegador web
        this.inAppBrowser.create(registro.text, '_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`navscan/navscan/historial/mapa/:${registro.text}`);
        //console.log(registro.type)
        break;
    }
  }



  /* Limpiar Registro */
  async limpiarHistorial(){
    await this.storage.clear().then(()=>{
      this.cargaStorage().then(() => this.navCtrl.navigateForward('/navscan'));
    });
  }



}
