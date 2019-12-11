import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    CompartidoModule
  ]
})
export class ListaModule { }
