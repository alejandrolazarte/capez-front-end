import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyListComponent} from '../company/compnay-list/company-list.component'
import {CompanyCreateComponent} from '../company/company-create/company-create.component'
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyFormComponent } from './company-form/company-form.component';


@NgModule({
  declarations: [CompanyListComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  exports:[
    CompanyListComponent,
    CompanyCreateComponent
  ]
})
export class CompanyModule { }
