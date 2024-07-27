import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AventuraPageRoutingModule } from './aventura-routing.module';

import { AventuraPage, SafeAventura } from './aventura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AventuraPageRoutingModule
  ],
  declarations: [AventuraPage, SafeAventura],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AventuraPageModule {}
