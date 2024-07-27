import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportePageRoutingModule } from './esporte-routing.module';

import { EsportePage, SafeEsporte } from './esporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportePageRoutingModule
  ],
  declarations: [EsportePage, SafeEsporte],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsportePageModule {}
