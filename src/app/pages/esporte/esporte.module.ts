import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportePageRoutingModule } from './esporte-routing.module';

import { EsportePage } from './esporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportePageRoutingModule
  ],
  declarations: [EsportePage]
})
export class EsportePageModule {}
