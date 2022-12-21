import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuPageModule } from '../menu/menu.module';

import { IonicModule } from '@ionic/angular';

//import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
