import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaCameraPageRoutingModule } from './bateria-camera-routing.module';

import { BateriaCameraPage } from './bateria-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaCameraPageRoutingModule
  ],
  declarations: [BateriaCameraPage]
})
export class BateriaCameraPageModule {}
