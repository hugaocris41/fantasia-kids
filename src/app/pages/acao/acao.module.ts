import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcaoPageRoutingModule } from './acao-routing.module';

import { AcaoPage, SafeAcao } from './acao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcaoPageRoutingModule
  ],
  declarations: [AcaoPage,SafeAcao],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcaoPageModule {}
