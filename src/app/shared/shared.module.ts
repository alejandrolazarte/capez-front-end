import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list/generic-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [GenericListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    GenericListComponent
  ]
})
export class SharedModule { }
