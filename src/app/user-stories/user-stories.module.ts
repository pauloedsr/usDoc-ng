import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from './../layout/forms/forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoriesRoutingModule } from './user-stories-routing.module';
import { UserStoriesComponent } from './user-stories.component';
import { FormUsComponent } from './form-us/form-us.component';
import { CreateUsComponent } from './create-us/create-us.component';
import { EditUsComponent } from './edit-us/edit-us.component';

@NgModule({
  imports: [
    CommonModule,
    UserStoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  declarations: [UserStoriesComponent, FormUsComponent, CreateUsComponent, EditUsComponent]
})
export class UserStoriesModule { }
