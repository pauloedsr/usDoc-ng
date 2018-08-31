import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto.component';
import { MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '../../../node_modules/@angular/material';
import { ViewProjetoComponent } from './view-projeto/view-projeto.component';
import { FormProjetoComponent } from './form-projeto/form-projeto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [ProjetoComponent, ViewProjetoComponent, FormProjetoComponent]
})
export class ProjetoModule { }
