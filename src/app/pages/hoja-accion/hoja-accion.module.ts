import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojaAccionPageRoutingModule } from './hoja-accion-routing.module';

import { HojaAccionPage } from './hoja-accion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojaAccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HojaAccionPage]
})
export class HojaAccionPageModule {}
