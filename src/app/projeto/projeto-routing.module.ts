import { ViewProjetoComponent } from './view-projeto/view-projeto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoComponent } from './projeto.component';

const routes: Routes = [
  {
    path: '',
    component: ProjetoComponent
  }, {
    path: 'view/:id',
    component: ViewProjetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
