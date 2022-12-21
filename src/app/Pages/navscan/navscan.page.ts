import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataLocalService } from 'src/app/service/data-local.service';

@Component({
  selector: 'app-navscan',
  templateUrl: './navscan.page.html',
  styleUrls: ['./navscan.page.scss'],
})
export class NavscanPage implements OnInit {

  constructor(private storage: Storage, public dataLocal: DataLocalService) {
  }

   ngOnInit() {
     this.storage.create().then(()=>{this.dataLocal.cargaStorage();});
  }

}
