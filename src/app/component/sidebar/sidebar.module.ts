import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [
    FormComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SidebarRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]

})
export class SidebarModule { }
