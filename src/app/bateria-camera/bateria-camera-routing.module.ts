import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaCameraPage } from './bateria-camera.page';

const routes: Routes = [
  {
    path: '',
    component: BateriaCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriaCameraPageRoutingModule {}
