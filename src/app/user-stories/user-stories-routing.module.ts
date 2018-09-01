import { EditUsComponent } from './edit-us/edit-us.component';
import { FormUsComponent } from './form-us/form-us.component';
import { UserStoriesComponent } from './user-stories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUsComponent } from './create-us/create-us.component';

const routes: Routes = [
  {
    path: '',
    component: UserStoriesComponent
  }, {
    path: 'view/:id',
    component: UserStoriesComponent
  }, {
    path: 'create/:projeto',
    component: CreateUsComponent
  }, {
    path: 'edit/:id',
    component: EditUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStoriesRoutingModule { }
