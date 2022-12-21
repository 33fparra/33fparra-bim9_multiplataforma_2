import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/service/data-local.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner : BarcodeScanner, private dataLocal: DataLocalService) { }

  ngOnInit() {
    this.dataLocal.cargaStorage();
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode Data', barcodeData);
      this.dataLocal.guardarRegistro('QRCode','geo:-74.0066, 40.7135');
      if(!barcodeData.cancelled){
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro('QRCode','geo:-70.6096, -33.4670');

    })
  }

}
