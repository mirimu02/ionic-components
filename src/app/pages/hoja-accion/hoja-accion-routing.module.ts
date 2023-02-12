import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaAccionPage } from './hoja-accion.page';

const routes: Routes = [
  {
    path: '',
    component: HojaAccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaAccionPageRoutingModule {}
