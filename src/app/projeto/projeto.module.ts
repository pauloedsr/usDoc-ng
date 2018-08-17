import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto.component';

@NgModule({
  imports: [
    CommonModule,
    ProjetoRoutingModule
  ],
  declarations: [ProjetoComponent]
})
export class ProjetoModule { }
