import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportePage } from './esporte.page';

const routes: Routes = [
  {
    path: '',
    component: EsportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportePageRoutingModule {}
