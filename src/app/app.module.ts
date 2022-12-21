import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import * as firebase from 'firebase/app';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpBackend, HttpClient, HttpHandler, HttpXhrBackend, ɵHttpInterceptingHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


//inicializacion de Firebase
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule],
  providers:[
    InAppBrowser,
    BarcodeScanner,
    HttpClient,
    HttpXhrBackend,
    { provide: HttpBackend, useExisting: HttpXhrBackend },
    { provide: HttpHandler, useClass: ɵHttpInterceptingHandler},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
