import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto.component';
import { MatListModule, MatButtonModule, MatIconModule } from '../../../node_modules/@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [ProjetoComponent]
})
export class ProjetoModule { }
